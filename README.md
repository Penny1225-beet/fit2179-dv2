# Malaysia's Vanishing Wilderness
### A story of disappearing species and shrinking forests

🔗 [在线Demo](https://penny1225-beet.github.io/fit2179-dv2/)

## 项目简介

马来西亚是全球生物多样性最丰富的国家之一，但其自然生态正面临严重威胁。
本项目基于 **IUCN Red List** 与 **Global Forest Watch** 数据，
对马来西亚境内 **2,512个已评估物种** 进行数据可视化分析，
呈现物种濒危现状、森林流失趋势及其背后的关联，以叙事化(storytelling)方式
引导读者理解"正在失去什么、为什么会这样、哪里还有希望"。

## 核心发现

- 自2001年以来，马来西亚已流失 **980万公顷** 森林
- **336种** 物种被列为极危(Critically Endangered)
- **58%** 的已评估物种呈下降趋势
- 全境记录在案的物种共 **849种**

## 页面结构（5个引导问题）

1. How many are at risk? —— 物种风险总览
2. What's threatening them? —— 威胁因素分析
3. Where have the forests gone? —— 森林流失趋势
4. Where are they found? —— 物种地理分布
5. Is there still hope? —— 保护成效与展望

## 数据处理

- 物种分布数据（IUCN导出）与森林流失数据（Global Forest Watch导出）
  在可视化前于电子表格中完成清洗与汇总统计
- 地图可视化采用经纬度坐标点叠加马来西亚地理边界图层（GeoJSON/TopoJSON）实现，
  由Vega-Lite渲染
- 各图表的汇总指标（如物种濒危分布、各驱动因素导致的森林流失趋势）
  为预处理后的静态数据，直接嵌入可视化规范(spec)中

## 技术栈

- **Vega-Lite** —— 声明式交互数据可视化
- HTML / CSS / JavaScript
- 数据来源：IUCN Red List, Global Forest Watch

## 项目背景

本项目为Monash大学 FIT2179 (Data Visualisation) 课程作业，
个人独立完成从数据整理、可视化设计到叙事结构搭建的全流程。
