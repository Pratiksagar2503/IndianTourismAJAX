let apiKey = "a7602bcb441642efa0e314079648d67e";

let newsAcc = document.getElementById("newsAcc");
let lstAcc = document.getElementById("lstAcc");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  // "https://github.com/Pratiksagar2503/newsproject/blob/master/db.json"
  "Heritage.json", true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = " ";
    let lstH = " ";

    articles.forEach(function (element, index) {
      console.log(element, index);

      let news = `   <div class="card my-4">
        <div class="card-header bgm" id="heading${index} ">
           <h class="mb-0 ">
              <button class="btn collapsed text-white"  data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> ${
        index + 1
      } : <b>${element["title"]}</b> </button>
            </h>
          </div>
          <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAcc" >
          
            <div class="card-img-top d-flex justify-content-center"><img  class='h-50 w-50' src="${
              element["urlToImage"]
            }" alt=""></div>
            <div class="card-body">${element["content"]} <a href = '${
        element["url"]
      }' target='_blank'>Read  More </a></div>
          </div>
        </div>
        </div>`;

      let lst = ` 
              <ul class="list-group list-group-flush ">
          <li class="list-group-item "> <a class='icons' href='${element["url"]} target = '_blank'>' ${element["title"]}</a></li>
        </ul>`;

      lstH += lst;

      newsHtml += news;
    });
    lstAcc.innerHTML = lstH;

    newsAcc.innerHTML = newsHtml;
  } else {
    console.log("Some Error Occured !!");
  }
};
xhr.send();

