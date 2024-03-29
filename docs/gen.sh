#!/bin/bash
# 遍历读取所有的文件及其子文件
function read
{
  for filename in `ls $1`
  do
    # echo "./"$filename >> $1"/README.md"
    if [[ -d $1"/"${filename} ]];then
      echoFolder ${filename} $1
      read $1"/"${filename}
    else
      echoFile ${filename} $1
    fi
  done
}
# 写入文件夹目录样式
function echoFolder
{
#   echo [$1]"(./"$1"/) <br/>" >> $2"/README.md"
  echo "<folderIndex name="\"$1\"" link=\"./"$1/\""/>" >> $2"/README.md"
}
# 写入文件目录样式
function echoFile
{
  prefix=${1%.*}
  suffix=${1##*.}
  if [[ ${suffix} == "md" ]] && [[ $1 != "README.md" ]];then
    # echo [$prefix]"(./"$1") <br/>" >> $2"/README.md"
    echo "<fileIndex name="\"${prefix}\"" link=\"./"${prefix}".html\"/>" >> $2"/README.md"
  fi
}
# 删除所有的README.md文件，重新开始构建目录
function deleteRead
{
  for filename in `ls $1`
  do
    if [[ -d $1"/"${filename} ]];then
      deleteRead $1"/"${filename}
    else
      if [[ -f $1"/README.md" ]];then
        rm -rf $1"/README.md"
      fi
    fi
  done
}

homePath=$(cd $(dirname $0);pwd)/technote
deleteRead ${homePath}
read ${homePath}
