parentdiv=document.createElement("div")
parentdiv.classList.add("col-sm-12","col-md-12","col-lg-12","col-xl-12")
container=document.getElementById("div1")
container.appendChild(parentdiv)
heading=document.createElement("h3")
heading.setAttribute("id","heading")
heading.classList.add("text-center","mt-4","fs-1")
heading.innerText="Enter the word and Get the definitions"
parentdiv.appendChild(heading)

form=document.createElement("form")
form.classList.add("mt-4")
parentdiv.appendChild(form)

search=document.createElement("input")
search.classList.add("text-center")
search.setAttribute("type","text")
form.appendChild(search)

searchbtn=document.createElement("button")
searchbtn.setAttribute("type","button")
searchbtn.innerText="Search"
searchbtn.setAttribute("onclick","searchfunc(search.value)")
form.appendChild(searchbtn)

table=document.createElement("table")
parentdiv.appendChild(table)

function searchfunc(x)
{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${x}`)
    .then((data)=>data.json())
    .then((res)=>
    {   
        table.innerHTML=" "
        table.classList.add("mt-4","mx-auto","fs-3")
        if(res.title=='No Definitions Found')
        {
            let message=document.createElement("p")
            message.innerText=res.message
            console.log(res.message)
            table.appendChild(message)
        }
        
        else{
        thead=document.createElement("thead")
        thead.classList.add("table","thead-dark")
        table.appendChild(thead)
        row1=document.createElement("tr")
        row1.setAttribute("id","row")
        table.appendChild(row1)

        head1=document.createElement("td")
        head1.innerText="Word"
        console.log(res)
       thead.appendChild(head1)

        data1=document.createElement("td")
        data1.rowSpan=3
        data1.innerText=res[0].word
        row1.appendChild(data1)
        
       head2=document.createElement("td")
        head2.innerText="Parts of the speech"
        thead.appendChild(head2)

        data2=document.createElement("td")
        data2.innerText=res[0].meanings[0].partOfSpeech
        row1.appendChild(data2)

        row2=document.createElement("tr")
        row1.setAttribute("id","row")
        table.appendChild(row2)

        datatwo=document.createElement("td")
        datatwo.innerText=res[0].meanings[1].partOfSpeech
        row2.appendChild(datatwo)

        row3=document.createElement("tr")
        row1.setAttribute("id","row")
        table.appendChild(row3)
        datathree=document.createElement("td")
        datathree.innerText=res[0].meanings[2].partOfSpeech
        row3.appendChild(datathree)

        head3=document.createElement("td")
        head3.innerText="Definition"
        thead.appendChild(head3)

        data3=document.createElement("td")
        data3.innerText=res[0].meanings[0].definitions[0].definition
        console.log(res[0].meanings[0].definitions[0])
        row1.appendChild(data3)
        
        defn1=document.createElement("td")
        defn1.innerText=res[0].meanings[1].definitions[0].definition
        row2.appendChild(defn1)

        defn2=document.createElement("td")
        defn2.innerText=res[0].meanings[2].definitions[0].definition
        row3.appendChild(defn2)

        head4=document.createElement("td")
        head4.innerText="Audio"
        thead.appendChild(head4)

        audiodata=document.createElement("td")
        audiodata.rowSpan="3"
        var a=document.createElement("A")
        var link=document.createTextNode("Audio Phonitics")
        a.appendChild(link)
        a.href=res[0].phonetics[0].audio
        a.target="_self"
        audiodata.appendChild(a)
        row1.appendChild(audiodata)
               
    }
   
    });
}