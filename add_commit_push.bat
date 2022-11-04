@echo off

set GIT_PATH="C:\Program Files\Git\cmd\git.exe"

%GIT_PATH% add -A
%GIT_PATH% commit -am "%*"
%GIT_PATH% push %BRANCH%
