---
title: "A Novel Benchmark K-Means Clustering on Continuous Data"
date: 2022-03-31
pubtype: "Paper"
featured: false
description: "Authors: Prasanna K Surya Narayana G"
tags: ["DevOps","Continuous Integration","Continuous Delivery","CI/CD pipelines","agile","Culture"]

link: "https://scholar.google.co.in/scholar?hl=en&as_sdt=0,5&cluster=5240573507557811657"
weight: 400
sitemap:
  priority : 0.8
---
COVID-19 is an astoundingly infectious disease that has grabbed the eye of the general population across the globe. Modeling of such infections can be really significant in the forecast of their effect. While conventional models can give reasonable outcomes, it can likewise fail to understand the complexities contained inside the data. In this study, publicly available dataset (from Kaggle) is used, containing data on infected, recovered, and deceased patients in 625 regions more than 157 days (2nd April 2020 to 6th Sept 2020). This dataset, expected to be a time series dataset, is translated into a regression dataset and utilized in training a multilayer perceptron (MLP) and artificial neural network (ANN). The objective of training is to accomplish an overall model of the maximal number of patients over all regions in each time unit. Hyper-Parameters (HPs) of the MLP are shifted utilizing a grid search method, with an aggregate of 18614 HPs combinations. Utilizing those groups, an aggregate of 167526 ANNs are trained (55842 for every patient group—deceased-recovered-infected), and each model is assessed utilizing the coefficient of determination (R2). Cross-validation is performed utilizing K-fold method with 5-folds. Best models accomplished comprises of four hidden layers with four neurons in every one of those layers, and utilize a ReLU activation-function, with R2 scores of 0.979 for affirmed, 0.995 for decreased, and 0.989 for recovered patient models. At the point when cross-validation is applied, these scores drop to 0.95 for affirmed, 0.79 for recovered, and 0.97 for deceased patient models, demonstrating lofty robustness of the decreased patient model, great power for affirmed, and low for recovered patient model.

{{< youtube id="FsfKsqI07jM" t="80" width="600px" >}}