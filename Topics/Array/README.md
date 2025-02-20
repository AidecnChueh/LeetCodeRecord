# 陣列（Array）概念與常用方法介紹

在 **JavaScript** 中，**陣列（Array）** 是一種 **動態可變長度的物件型資料結構**，

可存放不同類型的元素，並提供許多內建的方法來操作數據。

---

## **1️⃣ 陣列的特性**
- **動態長度**：陣列大小可變，可隨時新增或刪除元素。
- **索引從 `0` 開始**：第一個元素索引為 `0`，最後一個為 `arr.length - 1`。
- **允許不同類型的元素**：JavaScript 陣列可以包含不同類型的數據，例如 `number`、`string`、`object`。

---

## **2️⃣ 陣列的宣告方式**
```javascript
const arr1 = [1, 2, 3, 4, 5];  // 一般方式
const arr2 = new Array(5);      // 創建一個長度為 5 的陣列（值為 `undefined`）
const arr3 = Array.from("hello"); // 轉換可迭代對象為陣列 ['h', 'e', 'l', 'l', 'o']
const arr4 = []; // 空陣列
```

---

## **3️⃣ 陣列的基本操作**
| **操作** | **說明** | **範例** |
|------|------|------|
| **讀取元素** | 透過索引存取元素 | `arr[0]` |
| **修改元素** | 透過索引修改元素 | `arr[1] = 100;` |
| **新增元素** | `push()` 添加到尾部、`unshift()` 添加到頭部 | `arr.push(6); arr.unshift(0);` |
| **刪除元素** | `pop()` 刪除最後一個、`shift()` 刪除第一個 | `arr.pop(); arr.shift();` |
| **長度** | `length` 屬性獲取陣列長度 | `arr.length` |

---

## **4️⃣ 常用的陣列方法**

### **🔹 `push()` / `pop()`（新增/刪除尾部元素）**
```javascript
const arr = [1, 2, 3];
arr.push(4);   // [1, 2, 3, 4]
const last = arr.pop();  // last = 4, arr = [1, 2, 3]
```

### **🔹 `shift()` / `unshift()`（新增/刪除頭部元素）**
```javascript
const arr = [1, 2, 3];
arr.unshift(0);  // [0, 1, 2, 3]
const first = arr.shift();  // first = 0, arr = [1, 2, 3]
```

### **🔹 `splice()`（修改陣列內容）**
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);  // 刪除索引 2（數字 3），arr = [1, 2, 4, 5]
arr.splice(1, 0, "A", "B");  // 在索引 1 插入，arr = [1, "A", "B", 2, 4, 5]
```

### **🔹 `slice()`（擷取子陣列，不影響原陣列）**
```javascript
const arr = [1, 2, 3, 4, 5];
const subArr = arr.slice(1, 4);  // [2, 3, 4]
```

### **🔹 `map()`（對每個元素應用函數，返回新陣列）**
```javascript
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);  // [1, 4, 9]
```

### **🔹 `filter()`（篩選符合條件的元素）**
```javascript
const numbers = [10, 20, 30, 40];
const result = numbers.filter(num => num > 20);  // [30, 40]
```

### **🔹 `reduce()`（累加/累積計算）**
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);  // sum = 15
```

### **🔹 `find()` / `findIndex()`（搜尋特定元素）**
```javascript
const arr = [10, 20, 30, 40];
const found = arr.find(num => num > 25);   // 30
const index = arr.findIndex(num => num > 25);  // 2
```

### **🔹 `sort()`（排序陣列）**
```javascript
const numbers = [5, 10, 2, 8];
numbers.sort((a, b) => a - b);  // [2, 5, 8, 10]（升序）
numbers.sort((a, b) => b - a);  // [10, 8, 5, 2]（降序）
```

---

## **5️⃣ 陣列遍歷方式**
### **🔹 `forEach()`（遍歷所有元素，不返回新陣列）**
```javascript
const arr = [1, 2, 3];
arr.forEach(num => console.log(num));
// 1
// 2
// 3
```

### **🔹 `for ... of`（ES6 遍歷方式）**
```javascript
const arr = [1, 2, 3];
for (const num of arr) {
    console.log(num);
}
```

### **🔹 `for ... in`（遍歷索引，不推薦用於陣列）**
```javascript
const arr = [1, 2, 3];
for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
```

---

## **6️⃣ 陣列 vs. 物件**
| **比較項目** | **陣列（Array）** | **物件（Object）** |
|-------------|-----------------|-----------------|
| **數據存取** | 透過索引存取，如 `arr[0]` | 透過鍵存取，如 `obj.key` |
| **順序性** | **有順序**（索引可排序） | **無順序**（鍵順序未保證） |
| **適用場景** | 存放大量同類型數據 | 存放鍵值對，適用於結構化數據 |

---

## ** 📌 4. 相關 LeetCode 題目**
### **📌 基本操作**
| 題目 | 類型 |
|------|------|


