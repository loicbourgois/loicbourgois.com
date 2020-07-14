current_folder=$(pwd)
loicbourgois_root_folder_relative="`dirname \"$0\"`"              # relative
export loicbourgois_root_folder="`( cd \"$loicbourgois_root_folder_relative\" && pwd )`"
project="event-driven-level-design"
cd_folder=$loicbourgois_root_folder/${project}
echo "Moving to $cd_folder"
cd $cd_folder
atom $loicbourgois_root_folder/README.md
atom $loicbourgois_root_folder/index.html
atom $loicbourgois_root_folder/${project}/index.html
atom $loicbourgois_root_folder/${project}/index.css
atom $loicbourgois_root_folder/${project}/index.js
open $loicbourgois_root_folder/${project}/index.html
