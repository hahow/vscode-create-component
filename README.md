# Create Component

這是一個 Visual Studio Code 的 extension，可以讓 [Hahow for Business](https://business.hahow.in/) 的前端團隊根據自己的「[資料夾分類＆檔案命名規則](https://github.com/hahow/hahow-for-business/wiki/Frontend-Coding-Style-Conventions#%E8%B3%87%E6%96%99%E5%A4%BE%E6%94%BE%E7%BD%AE%E8%A6%8F%E5%89%87)」自動批次建立 template。

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

## License

Distributed under the MIT License. See `LICENSE` for more information.
