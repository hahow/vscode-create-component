[![GitHub package.json version][version-shield]][version-url]
[![Visual Studio Marketplace Installs - Azure DevOps Extension][install-shield]][install-url]

<div align="center">
  <a href="https://github.com/hahow/vscode-create-component">
    <img src="images/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Create Component</h3>

  <p align="center">
    這是一個 Visual Studio Code 的 extension，可以讓 <a href="https://business.hahow.in/">Hahow for Business</a> 的前端團隊根據自己的「<a href="https://github.com/hahow/hahow-for-business/wiki/Frontend-Coding-Style-Conventions#%E8%B3%87%E6%96%99%E5%A4%BE%E6%94%BE%E7%BD%AE%E8%A6%8F%E5%89%87">資料夾分類＆檔案命名規則</a>」自動批次建立 template
    <br />
    <br />
    <a href="https://github.com/hahow/vscode-create-component/issues">Report Bug</a>
    ·
    <a href="https://github.com/hahow/vscode-create-component/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#diagram">Diagram</a></li>
      </ul>
    </li>
  </ol>
</details>

## Features

目前支援建立以下 template：

- **Component**
- **Higher-Order Component**
- **Hook**
- **Utility Function**

![feature](images/feature.gif)

## Getting Started

### Installation

前往 [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=amowu.vscode-create-component) 安裝 Visual Studio Code extension

## Usage

1. 在 Visual Studio Code 的 explorer tab 中，找到想要建立 template 的資料夾，點擊右鍵選單
1. 點擊「**Create Component**」
1. 選擇想要建立的類型
1. 輸入檔案名稱，然後 enter
1. extension 將會自動建立一個新的資料夾以及一系列相關檔案

## Contributing

如果你有一些可以讓這個 extension 變得更好用的建議，請 fork 這個 repository 然後送 Pull Request 給我們，或是你也可以開個 issue 讓我們知道。別忘了給 project 點個 Star！感激不盡！

要在 local 開發的步驟：

1. `git checkout` forked repository
1. `npm install` 安裝 dependencies
1. Visual Studio Code 開啟專案
1. 修改程式碼，`F5` 進入 debug 模式
1. Visual Studio Code 會開啟第二個 development 專用的視窗

### Diagram

下圖以 Component 類型的元件為例，其它類型以此類推：

```mermaid
classDiagram
  IFactory <|.. ComponentFactory
  <<Interface>> IFactory
  IFactory: +createValidator()
  IFactory: +createGenerator()
  ComponentFactory: +createValidator()
  ComponentFactory: +createGenerator()
  IValidator <|.. ComponentValidator
  <<Interface>> IValidator
  IValidator: +string validate(string name)
  ComponentValidator: +string validate(string name)
  Generator <|-- ComponentGenerator
  Generator: +generate(string name, string folder)
  ComponentGenerator: +generate(string name, string folder)
  ComponentValidator <.. ComponentFactory
  ComponentGenerator <.. ComponentFactory
  IFactory <-- extension
  IValidator <.. extension
  Generator <.. extension
  extension: -IFactory factory
  extension: +execute()
```

1. 如果要調整 template，可以改 `/src/templates/component/*.ts` 和 `src/utils/generator/ComponentGenerator.ts` 這兩份檔案
1. 如果要調整 validator，可以改 `src/utils/validator/ComponentValidator.ts` 這個檔案
1. 如果要新增類型，可以參考 `src/utils/factory/ComponentFactory.ts` 新增相關檔案，然後在 `src/utils/execute.ts` 新增一筆 `enum Item`

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

Inspired by [pranshuagrawal/vscode-create-component](https://github.com/pranshuagrawal/vscode-create-component), special thanks to [@pranshuagrawal](https://github.com/pranshuagrawal).

[install-shield]: https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/amowu.vscode-create-component
[install-url]: https://marketplace.visualstudio.com/items?itemName=amowu.vscode-create-component
[version-shield]: https://img.shields.io/github/package-json/v/hahow/vscode-create-component
[version-url]: https://github.com/hahow/vscode-create-component/releases
