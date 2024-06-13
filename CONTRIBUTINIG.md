# Contribution Guidelines

0. Create a issue with your 'Roll no.' as title and your 'name' in the description.
1. `FORK the repo`
2. `Clone your forked repo`
3. Create new Branch
    ```
    $ git checkout review/<your-name>
    ```
4. Go to `/src/review.js` you will get a array of objects `reviews`.
5. Copy the following object schema and replace the values
    ```
    {
        name: "Your Name", //string
        rollno: "Your Roll No.", //string
        rate: rating-Out-Of-5, //number
        review: "Good Workshop", //string
        improvements: [ //Array of Strings
            "improvement 1",
            "improvement 2"
        ],
    },
    ```
6. Add a new object in that `reviws` array.
7.  ``` 
    $ git add . 
    ```
8.  ```
    $ git commit -m "Add your message"
    ```
9.  ```
    $ git push origin review/<your-name>
    ```
10. Go to your git hub and switch to the branch `review/<your-name>`
11. Create a pull request with a meaning ful message and adding `#<issue number>`  in the message refering to the issue that you created.