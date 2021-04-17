    let arrayStudent = ['Martin Pratt: 53%','Kain Gibbs: 76%','Shantelle Shah: 82%','Ritik Alcock: 80%','Abdurahman Ratcliffe: 57%','Bailey Garcia: 68%','Freyja Joyce: 99%','Abraham Davison: 92%','Zarah Cote: 95%','Aayush Keith: 100%','Melvin Fischer: 58%','Blane Ayala: 68%','Gregg Zuniga: 76%','Rizwan Goodwin: 64%','Denise Turner: 84%','Shelly Reed: 89%','Robin Ellwood: 87%','Pollyanna Hopkins: 67%','Darcey Martins: 79%','Javan Rankin: 92%','Lina Flower: 99%','Millie-Rose Lacey: 65%','Lynda Whitley: 100%','Emrys Banks: 77%','Bradleigh Hodges: 60%','Aishah Knott: 94%','Shannen Blanchard: 90%','Ellise Watson: 56%','Kimora Carver: 54%','Elaina Allison: 59%','Kobe Odom: 61%','Keeleigh Searle: 97%','Coby Peters: 52%','Leslie Whitmore: 93%','Christian Cook: 65%','Esme Downes: 77%','Nico Clegg: 74%','Aine Welch: 82%','Noah Huber: 97%','Dewey Benton: 55%','Ubaid Shannon: 88%','Todd Chadwick: 81%']
    let student = arrayStudent.toString(' ').replaceAll(':','\n').replaceAll(',','\n').split('\n');
    let grades = arrayStudent.toString(' ').replaceAll(':','\n').replaceAll(',','\n').replaceAll('%',"").split('\n');
    console.log(student);
    console.log(grades);
    let studentgrades = new Map();
    for (var i = 0; i <= student.length-1; i+=2) {
        let temp = student[i];
        studentgrades.set(student[i],student[i+1])
        //problem two
        console.log(student[i]);
        //problem four
        var num = Number(grades[1])+Number(grades[3])+Number(grades[5])+Number(grades[7])+Number(grades[9])+Number(grades[11])+Number(grades[13])+Number(grades[15])+Number(grades[17])+Number(grades[19])+Number(grades[21])+Number(grades[23])+Number(grades[25])+Number(grades[27])+Number(grades[29])+Number(grades[31])+Number(grades[33])+Number(grades[35])+Number(grades[37])+Number(grades[39])+Number(grades[41]);
    }
    //problem four
    console.log(num/21);
    //problem one
    console.log(studentgrades);
    //problem three
    studentgrades.set('Isobella Moyer',' 95%');
    studentgrades.set('Star Mcdougall',' 56%');
    studentgrades.set('Blade Lennon',' 72%');
    studentgrades.set('Karishma Molloy',' 92%');
    studentgrades.set('Gregor Garner',' 63%');
    studentgrades.set('Alec Peterson',' 100%');
    studentgrades.set('Letitia Benitez', '67%');
    studentgrades.set('Elicia Hoover', '55%');
    //problem five
    studentgrades.delete('Aayush Keith','100%');
    studentgrades.delete('Alec Peterson','100%');
    studentgrades.delete('Lynda Whitley','100%');
    studentgrades.delete('Lina Flower','99%');
    studentgrades.delete('Coby Peters','52%');
    studentgrades.delete('Martin Pratt', '53%');    
    studentgrades.delete('Kimora Carver','54%');
    studentgrades.delete('Dewey Benton', '55%');
    //problem six
    console.log(JSON.stringify(studentgrades));
    console.log(studentgrades);











