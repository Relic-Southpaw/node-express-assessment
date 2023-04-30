const { default: axios } = require('axios');
const { Console, clear } = require('console');
const fs = require('fs')

fs.readFile('urls.txt', 'utf8', async (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var array = data.toString().split("\n");
    for (i in array) {
        if (array[i] == '') {
            return
        }
        try {
            let nohtp = array[i].replace(/^https?\:\/\//i, "")
            let baseurl = nohtp.split('/')[0]
            let res = await axios.get(`${array[i]}`)
            let data = res.data
            fs.writeFile(`${baseurl}`, data, "utf8", function (err) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                console.log(`Wrote to ${baseurl}`)
            })
        } catch {
            console.log(`Couldn't download ${array[i]}`)
        }
    }
});