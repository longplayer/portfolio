:: Fix EACCES issue when trying to initiate a server (nuxt, vue, docker, etc.)

%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
net stop winnat
net start winnat
exit
