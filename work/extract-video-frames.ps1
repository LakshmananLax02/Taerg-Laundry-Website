param(
  [string]$VideoPath,
  [string]$OutputDirectory
)

Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase

New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null

$player = [System.Windows.Media.MediaPlayer]::new()
$player.ScrubbingEnabled = $true
$player.Open([Uri]::new($VideoPath))

for ($attempt = 0; $attempt -lt 100 -and $player.NaturalVideoWidth -eq 0; $attempt++) {
  Start-Sleep -Milliseconds 100
  [System.Windows.Threading.Dispatcher]::CurrentDispatcher.Invoke(
    [Action]{},
    [System.Windows.Threading.DispatcherPriority]::Background
  )
}

if ($player.NaturalVideoWidth -eq 0) {
  throw 'Unable to read video dimensions.'
}

$duration = $player.NaturalDuration.TimeSpan.TotalSeconds
$width = $player.NaturalVideoWidth
$height = $player.NaturalVideoHeight
Write-Output "duration=$duration width=$width height=$height"

$player.Position = [TimeSpan]::Zero
$player.Play()

for ($index = 0; $index -lt 10; $index++) {
  Start-Sleep -Milliseconds 450

  $visual = [System.Windows.Media.DrawingVisual]::new()
  $context = $visual.RenderOpen()
  $context.DrawVideo($player, [Windows.Rect]::new(0, 0, $width, $height))
  $context.Close()

  $bitmap = [System.Windows.Media.Imaging.RenderTargetBitmap]::new(
    $width,
    $height,
    96,
    96,
    [System.Windows.Media.PixelFormats]::Pbgra32
  )
  $bitmap.Render($visual)

  $encoder = [System.Windows.Media.Imaging.PngBitmapEncoder]::new()
  $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bitmap))
  $outputPath = Join-Path $OutputDirectory ("frame-{0:D2}.png" -f $index)
  $stream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::Create)
  $encoder.Save($stream)
  $stream.Close()
  Write-Output $outputPath
}

$player.Pause()
$player.Close()
