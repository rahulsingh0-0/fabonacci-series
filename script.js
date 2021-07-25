"use-strict";

let srNoDiv = document.querySelector(".srNo");
let nextSeriesBtn = document.querySelector(".next");
let table = document.querySelector("table");

let srNo = 2;
let fabonachii = [1, 1];

nextSeriesBtn.addEventListener("click", function () {
  for (let i = 2; i <= 2; i++) {
    // for last num
    fabonachii.push(fabonachii[i - 2] + fabonachii[i - 1]);
    // for prime no
    let primeNo = fabonachii.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });

    // setting textcontent into table
    let lastIndex = fabonachii[fabonachii.length - 1];
    const html = ` <tr>
            <td class="srNo">${srNo++}</td>
            <td>${lastIndex}</td>
            <td>(${fabonachii})</td>
             <td>${primeNo}</td>
          </tr>`;
    table.insertAdjacentHTML("beforeend", html);
  }
});

nextSeriesBtn.addEventListener("click", function () {
  for (let i = 3; i <= 3; i++) {
    fabonachii.push(fabonachii[i - 2] + fabonachii[i - 1]);
    let lastIndex = fabonachii[fabonachii.length - 1];
    let primeNo = fabonachii.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    const html = ` <tr>
            <td class="srNo">${srNo++}</td>
            <td>${lastIndex}</td>
            <td>(${fabonachii})</td>
             <td>${primeNo}</td>
          </tr>`;
    table.insertAdjacentHTML("beforeend", html);
  }
});
nextSeriesBtn.addEventListener("click", function () {
  for (let i = 4; i <= 4; i++) {
    fabonachii.push(fabonachii[i - 2] + fabonachii[i - 1]);
    let lastIndex = [fabonachii.length];
    let primeNo = fabonachii.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    const html = ` <tr>
            <td class="srNo">${srNo++}</td>
            <td>${lastIndex}</td>
            <td>(${fabonachii})</td>
             <td>${primeNo}</td>
          </tr>`;
    table.insertAdjacentHTML("beforeend", html);
  }
});
nextSeriesBtn.addEventListener("click", function () {
  for (let i = 5; i <= 5; i++) {
    fabonachii.push(fabonachii[i - 2] + fabonachii[i - 1]);
    let lastIndex = fabonachii[fabonachii.length - 1];
    let primeNo = fabonachii.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    const html = ` <tr>
            <td class="srNo">${srNo++}</td>
            <td>${lastIndex}</td>
            <td>(${fabonachii})</td>
             <td>${primeNo}</td>
          </tr>`;
    table.insertAdjacentHTML("beforeend", html);
  }
});
nextSeriesBtn.addEventListener("click", function () {
  for (let i = 6; i <= 6; i++) {
    fabonachii.push(fabonachii[i - 2] + fabonachii[i - 1]);
    let lastIndex = fabonachii[fabonachii.length - 1];
    let primeNo = fabonachii.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    const html = ` <tr>
            <td class="srNo">${srNo++}</td>
            <td>${lastIndex}</td>
            <td>(${fabonachii})</td>
            <td>${primeNo}</td>
          </tr>`;

    table.insertAdjacentHTML("beforeend", html);
    nextSeriesBtn.disabled = true;
  }
});

