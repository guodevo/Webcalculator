function append_to_area(variable) {
    document.getElementById("result").innerHTML += variable;
}


function get_result() {
    let results = eval(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = results;

}

function delete_all() {
    document.getElementById('result').innerHTML = '';
}

function delete1(){
    let variable = document.getElementById('result');
    variable.innerHTML = variable.innerHTML.slice(0, -1);
}