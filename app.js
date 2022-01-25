
const form_devs = document.getElementById('form_devs');
const devs_area = document.querySelector('.devs_area');


form_devs.addEventListener('submit' , function (e) {
    e.preventDefault();
    
    let name = this.querySelector('input[name= "name"]');
    let skill = this.querySelectorAll('input[name= "skill"]:checked');
    let gander = this.querySelector('input[name= "gander"]:checked');
    let picture = this.querySelector('input[name= "picture"]');

skills_arraw = [];

for (let i = 0; i < skill.length; i++) {
   
    skills_arraw.push(skill[i].value);
}

let data_arr;


if(dataGet('devs')){
data_arr = dataGet('devs');
}else{
    data_arr = [];
}

data_arr.push({
name : name.value,
gander : gander.value,
skill : skills_arraw,
picture : picture.value
});

dataSend('devs', data_arr);

alldevs();
});

alldevs();

function alldevs() {
    let all_devs = dataGet('devs');
    let data = '';
    all_devs.map(d => {


      let listes = '';
      d.skill.map(list => {
          listes += ' <li class = "list-group-item"> '+  list  +'   </li>';
      });


        data += `
        <div class="col-md-4">
        <div class="card text-left">
          <img class="card-img-top" src="${d.picture}" alt="">
          <div class="card-body">
            <h4 >${d.name}</h4>
            <p>Gander : ${d.gander}</p>
             Skill
             <hr>
            <br>
           <ul class="list-group">
                    ${listes}
           </ul>
          </div>
        </div>
</div>
        
        `;


    });

    devs_area.innerHTML = data;
}