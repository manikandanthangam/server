const Comments = require('../models/comments.model');

exports.getComments = function (req, res, next) {
  Comments.find(
    (error, data) => {
      if (error) {
        res.json({ error: error, data: [] });
      } else {
        res.json({ error: null, count: data.length, data: data });
      }
    }
  );
}

exports.createComment = function (req, res, next) {
  let SaveComment = new Comments(req.body);
  SaveComment.save(
    (error, data) => {
      if (error) {
        res.json({ error: error, data: [] });
      } else {
        res.json({ error: null, data: data });
      }
    }
  );
}

exports.updateComment = (req, res, next) => {
  res.json({ status: "success", data: req.body });
}

exports.deleteComment = (req, res, next) => {
  res.json({ status: "success", id: req.params.id });
}

exports.bulkInsert = function (req, res, next) {
  // let CommentsArray = [{
  //     "postId": 1,
  //     "id": 1,
  //     "name": "id labore ex et quam laborum",
  //     "email": "Eliseo@gardner.biz",
  //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 2,
  //     "name": "quo vero reiciendis velit similique earum",
  //     "email": "Jayne_Kuhic@sydney.com",
  //     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 3,
  //     "name": "odio adipisci rerum aut animi",
  //     "email": "Nikita@garfield.biz",
  //     "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 4,
  //     "name": "alias odio sit",
  //     "email": "Lew@alysha.tv",
  //     "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  //   },
  //   {
  //     "postId": 1,
  //     "id": 5,
  //     "name": "vero eaque aliquid doloribus et culpa",
  //     "email": "Hayden@althea.biz",
  //     "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 6,
  //     "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
  //     "email": "Presley.Mueller@myrl.com",
  //     "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 7,
  //     "name": "repellat consequatur praesentium vel minus molestias voluptatum",
  //     "email": "Dallas@ole.me",
  //     "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 8,
  //     "name": "et omnis dolorem",
  //     "email": "Mallory_Kunze@marie.org",
  //     "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 9,
  //     "name": "provident id voluptas",
  //     "email": "Meghan_Littel@rene.us",
  //     "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
  //   },
  //   {
  //     "postId": 2,
  //     "id": 10,
  //     "name": "eaque et deleniti atque tenetur ut quo ut",
  //     "email": "Carmen_Keeling@caroline.name",
  //     "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
  //   }];
  // (req.body);
  // res.json({data:req.body});
  let CommentsArray = req.body;
  for (let i = 0; i < CommentsArray.length; i++) {
    let eachComment = CommentsArray[i];
    let SaveComment = new Comments(eachComment);
    SaveComment.save(
      (error, data) => {
        if (error) {
          console.log("error" + error);
          res.json({ error: error, data: [] });
        } else {
          if (i >= CommentsArray.length) {
            console.log("data" + data);
            res.json({ error: null, data: data });
          }
        }
      }
    );
  }
}

