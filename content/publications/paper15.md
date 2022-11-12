---
title: "File based malware detection using ensemble method"
date: 2021-01-01
pubtype: "Paper"
featured: false
description: "Authors: Punna Sai Teja Shashank, Shaik Manzur Elahi, Saadam Sai Sumanth, Bochu Dhanraj, G SuryaNarayana"
tags: ["Machine Learning"]
link: "https://digital-library.theiet.org/content/conferences/10.1049/icp.2022.0315"
weight: 400
sitemap:
  priority : 0.8
---
Nowadays Malware is considered to be one of the primary cause of various serious security threats on the Internet. The majority of the security issues found on the Internet such as spam e-mail and various security attacks consider malware as their main cause. To deal with the new malware generated or the existing malware in a new form, new machine learning techniques have to be built. The traditional machine learning techniques are not fast enough to accurately detect all kinds of malware. To enhance the performance of traditional machine learning models we use a method called the Ensemble Method. In the ensemble method, we adopt an approach of machine learning that builds various multiple models and then ensemble them to generate an efficient predictive model. The results produced using the ensemble method are more accurate and efficient than a single independent model. In this paper, we proposed an ensemble-based file-based malware classifier that classifies given malware into one of 9 different classes namely Kelihos_ver1, Gatak, Simda, Obfuscator.ACY, Kelihos_ver3, Vundo, Lollipop, Tracur, Ramnit. XGBoost model is used for classification purpose and is just a better implementation of the Gradient Boosting Classifier. The Model is built using 200GB of data obtained from the Microsoft Malware Classification Challenge. The dataset consists of .asm files and .byte files of 150GB and 50GB respectively which result in 10,868 .asm files and .bytes files each. Various python libraries such as Numpy, Pandas, Seaborn, Multiprocessing, XGBoost, Matplotlib is used to develop the classifier.
