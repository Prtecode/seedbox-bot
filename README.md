seedbox-bot ![Status](https://img.shields.io/badge/Status-WIP-green.svg) ![For PT Lovers](https://img.shields.io/badge/For-PT%20Lovers-blue.svg)
=============================

Seedbox automation bot, featuring rss and auto deletion. Compatible with multiple WebUIs. Supports multiple user.

自动化的PT盒子管理工具，支持RSS下载和自动删种。支持多种BT客户端的WebUI，支持多用户模式。

![intro](./images/introduction.jpg)


# Installation / 安装指南

Get the production bundle from https://github.com/KevinWang15/seedbox-bot/releases

请从 https://github.com/KevinWang15/seedbox-bot/releases 获得安装包

```bash
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
mkdir seedbox-bot
tar -xzvf production-bundle.tar.gz --directory seedbox-bot --overwrite
cd seedbox-bot
./install.sh
```

# Works on / 兼容

* Any Windows / Linux System with NodeJS support. 所有支持NodeJS的Windows、Linux操作系统

* [Vultr](https://www.vultr.com/?ref=6886995) $2.5/mo VPS. Vultr 2.5美金一个月的VPS

* [Raspberry Pi](./raspberry_pi_guide.md). 树莓派

# Notes / 注意事项

1. Memory consumption of this program is about 200MB, while CPU consumption is negligible. 本程序内存消耗大约200MB，CPU消耗很低可以忽略不计。
2. Though the program provides multple user support, you should use it with caution, because accessing RSS with different passkeys may result in a ban. (consult PT admins first). 尽管本程序提供多用户支持，请务必小心，因为如果访问RSS时使用了不同的passkey，可能会被判定为小号，请先咨询PT管理员。

# English version

Currently there is only a Chinese version, i18n coming soon!

Please use Google translate for now..

If you like this project please star it, PRs are welcome!
