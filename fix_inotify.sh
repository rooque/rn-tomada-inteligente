echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
watchman watch-del-all
watchman shutdown-server

