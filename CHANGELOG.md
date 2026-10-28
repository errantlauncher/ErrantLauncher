# Changelog

## 1.0.0-beta.2

Beta 2 introduces a new way to build and launch the application, along with improvements to the interface and fixes for issues affecting settings, application launching, data imports, and window behavior.

### New Launch Method and Distribution Format

- **Native AOT.** In Beta 1, the application extracted .NET runtime components to a temporary folder every time it launched. Beta 2 uses **Native AOT**, which compiles the application code into native machine code ahead of time. The application no longer extracts .NET runtime components to `%TEMP%`, and the temporary `.net\ErrantLauncher` directories are no longer created.
    
- **ZIP archive instead of a single EXE.** In Beta 1, the application was distributed as a single executable file. Beta 2 is distributed as a ZIP archive that must be extracted in full. `ErrantLauncher-x64.exe`, `libSkiaSharp.dll`, and `av_libglesv2.dll` must be kept together in the same folder. The application will not launch if the EXE is separated from these DLLs.
    
- **Larger distribution package.** After extraction, Beta 2 takes up more disk space than the single EXE distributed with Beta 1. This is a trade-off of the new build and distribution method.
    

### What's Included

- `ErrantLauncher-x64.exe` — the application executable. The .NET runtime is included, so no separate .NET installation is required.
    
- `libSkiaSharp.dll` and `av_libglesv2.dll` — libraries required to render the application interface.
    
- `README.txt` and `README-ru.txt` — extraction and launch instructions in English and Russian.
    
- `SHA256SUMS.txt` — SHA-256 checksums for the executable and both DLLs.
    
- `.zip.sha256` — the checksum for the ZIP archive itself.
    

Checksums let you verify the integrity of downloaded files and confirm that they match the published versions.

### Interface Improvements

- **Manual card ordering.** Cards can now be reordered within a category using the context menu. The selected order is saved and restored after restarting the application.
    
- **Reordering sections and categories.** Sections and categories can be moved up, down, left, or right using their context menus.
    
- **Faster theme switching.** Changing the theme or accent color no longer causes noticeable window freezes.
    
- **Visual feedback.** Newly created or moved cards, categories, and sections briefly pulse with a highlight. The card grid also fades in smoothly when switching sections.
    
- **Updated favorites indicator.** The favorites star is now brighter and is no longer redundantly displayed on cards within the Favorites section itself.
    

### Fixes and Reliability

- **Protection against accidental settings loss.** If `settings.json` temporarily cannot be read, for example because another application or antivirus software has locked the file, the application no longer overwrites it with default settings during the next configuration change. This reduces the risk of losing saved settings because of a temporary file access error.
    
- **Window maximization is preserved.** When the main window is maximized, launching the application again or opening its window from the system tray should no longer restore it to its normal size.
    
- **More reliable handling of repeated launches.** The command to show the application window is now handled even if the first instance is still starting up or displaying the license screen. Previously, the command could be lost in these situations.
    
- **Accurate reporting when an elevated launch is canceled.** When launching a group of cards, if a card configured to run as administrator is canceled at the Windows User Account Control (UAC) prompt, it is now reported as canceled rather than successfully launched.
    
- **Launching commands and URLs no longer blocks the interface.** Command and URL cards are no longer launched directly on the UI thread. For example, attempting to access an unavailable network drive should no longer freeze the window while waiting for a timeout.
    
- **Folder imports now enforce the same limits as ZIP imports.** Importing cards from a folder now uses the same size limits as importing from a ZIP archive: a maximum of 100 MB of data in total and 10 MB per file. This prevents excessively large imports from consuming unnecessary disk space in the data directory.
    
- **Fixed ignored card clicks.** In rare situations, when a launch was already in progress, the next ordinary click on a card could be ignored. This has been fixed.
    
- **Fixed horizontal touchpad scrolling.** The card scrolling handler no longer blocks horizontal touchpad swipes.
    
- **Interface and stability fixes.** Fixed a missing section of the window border to the right of the category panel and rare cases where a card displayed incorrect content in the grid. Improved the reliability of the corrupted-file list when files are read and written concurrently.
    
- **Mass-import backups.** The `.mass-import-backups` folder now retains only the most recent fully verified backup. Older backups are deleted after the new backup has been confirmed, preventing backups from accumulating with every import operation.
    
- **Updated bug-report link.** The application's **Report a Problem** link now opens `https://errantlauncher.com/support/` instead of linking directly to GitHub Issues.
    

## 1.0.0-beta.1

First public beta release.

- Portable launcher for Windows x64. No application installation or separate .NET runtime installation required.
    
- Nine card types: applications, scripts, folders, files, Windows shortcuts, commands, URLs/URIs, MSI packages, and groups.
    
- Sections, categories, favorites, and search.
    
- Import wizard and sequential launching of card groups.
    
- Collection export and import, read-only mode, and 15 themes.