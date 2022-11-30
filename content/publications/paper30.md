---
title: "Pruning Long-term Recurrent Convolutional Networks for Video Classification and captioning"
date: 2022-01-01
pubtype: "Paper"
featured: false
description: "Authors: Saikiran Gogineni, G Suryanarayana, KLS Soujanya"
tags: ["Scopus","Deep Learning"]
link: "https://ieeexplore.ieee.org/abstract/document/9215414"
weight: 400
sitemap:
  priority : 0.8
---

Images, videos and speech are three frequent data fields found everywhere. Nearly 6 billion YouTube videos are watched daily. Video classification is an emerging application with few works proposed and indulging a lot of challenges. Video is a collection of frames (images). Simple algorithms utterly fail. Long-term recurrent convolutional networks (LRCN) are apt for video classification tasks as they are capable of capturing spatial and temporal behaviour. Though this network achieved significant accuracy, it passes every frame of a video through a CNN and LSTM which makes it computationally challenging. The time taken for training or testing a video is too high as CNN has to process several frames. So, in our work, this long-term recurrent convolutional network have been pruned. Several pruning techniques have been analysed. Here by providing metric evidence claimed that our pruned LRCN became 2x times faster with just a drop of 4% accuracy after pruning 50% of filters. The time is taken to classify test videos gradually decreased by 40% when Resnet101 is considered. In the video captioning task, Usage of simple CNN only yielded 19.3 BLE-U4 scores whereas pruned RSNET-101 produced 26.3 BLEU-4 Score. So, our work suggests to use pruned deep CNNS as an encoder instead of Custom-built simple CNNS as processing time of both networks is made equal. The parallel computing of frames is not considered by the user has been assumed.
