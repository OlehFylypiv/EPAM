(function() {
    'use strict';

    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];

    // Create and put a form to the HTML page. <form> is static
    var setForm = function () {
        
        var container = document.getElementById('container');
        
        var formContaiver = document.createElement('div');
        var form = document.createElement('form');
        
        var inputName = document.createElement('input');
        var inputEmail = document.createElement('input');
        var inputLastName = document.createElement('input');
        var inputPicture = document.createElement('input');
        var inputSkils = document.createElement('input');
        var inputSave = document.createElement('input');
        var inputCansel = document.createElement('input');

        formContaiver.setAttribute('class', 'form-container');
        form.setAttribute('id', 'main-form');
        form.setAttribute('class', 'form-inline');
        inputName.setAttribute('type', 'text');
        inputLastName.setAttribute('type', 'text');
        inputEmail.setAttribute('type', 'email');
        inputPicture.setAttribute('type', 'text');
        inputSkils.setAttribute('type', 'text');
        inputSave.setAttribute('type', 'submit');
        inputCansel.setAttribute('type', 'reset');

        inputName.setAttribute('id', 'name');
        inputLastName.setAttribute('id', 'lastName');
        inputEmail.setAttribute('id', 'email');
        inputPicture.setAttribute('id', 'picture');
        inputSkils.setAttribute('id', 'skills');
        inputSave.setAttribute('id', 'btnSave');
        inputCansel.setAttribute('id', 'btnRefresh');

        inputName.setAttribute('class', 'form-control');
        inputLastName.setAttribute('class', 'form-control');
        inputEmail.setAttribute('class', 'form-control');
        inputPicture.setAttribute('class', 'form-control');
        inputSkils.setAttribute('class', 'form-control');

        inputName.setAttribute('placeholder', 'Name');
        inputLastName.setAttribute('placeholder', 'Last Name');
        inputEmail.setAttribute('placeholder', 'Email');
        inputPicture.setAttribute('placeholder', 'Profile Picture');
        inputSkils.setAttribute('placeholder', 'Skills');
        inputSave.setAttribute('value', 'Save');
        inputCansel.setAttribute('value', 'Cansel');

        inputName.setAttribute('required', 'true');
        inputLastName.setAttribute('required', 'true');
        inputEmail.setAttribute('required', 'true');

        inputSave.setAttribute('class', 'btn btn-default');
        inputCansel.setAttribute('class', 'btn btn-default')
        
        form.appendChild(inputName);
        form.appendChild(inputLastName);
        form.appendChild(inputEmail);
        form.appendChild(inputPicture);
        form.appendChild(inputSkils);
        form.appendChild(inputSave);
        form.appendChild(inputCansel);

        formContaiver.appendChild(form);
        container.appendChild(formContaiver);
    }

    // Create and fill up <thead>. <thead> is static
    var setTableHead = function () {
        
        var container = document.getElementById('container');

        var tableContainer = document.createElement('div');
        var table = document.createElement('table');
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');

        // create a <span> for sorting an img
        var spanSortA_Z1 = document.createElement('span');
        var spanSortA_Z2 = document.createElement('span');

        var thNumber = document.createElement('th');
        var thStudent = document.createElement('th');
        var thEmail = document.createElement('th');
        var thPicture = document.createElement('th');
        var thSkills = document.createElement('th');
        var thControls = document.createElement('th');

        // Set a column headers
        thNumber.innerHTML = '#';
        thStudent.innerHTML = 'Student';
        thEmail.innerHTML = 'Email';
        thPicture.innerHTML = 'Profile Picture';
        thSkills.innerHTML = 'SKills';
        thControls.innerHTML = 'Controls';

        tableContainer.setAttribute('class', 'table-container');
        table.setAttribute('id', 'table1');
        table.setAttribute('class', 'table-hover');
        thead.setAttribute('id', 'table-head');

        thStudent.setAttribute('data-type', 'string');
        thSkills.setAttribute('data-type', 'string');

        // span contain an img for sorting 
        spanSortA_Z1.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet');
        spanSortA_Z2.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet');

        spanSortA_Z1.setAttribute('id', 'span-sort-a-z-1');
        spanSortA_Z2.setAttribute('id', 'span-sort-a-z-2');

        thSkills.appendChild(spanSortA_Z1);
        thStudent.appendChild(spanSortA_Z2);

        tr.appendChild(thNumber);
        tr.appendChild(thStudent);
        tr.appendChild(thEmail);
        tr.appendChild(thPicture);
        tr.appendChild(thSkills);
        tr.appendChild(thControls);

        thead.appendChild(tr);
        table.appendChild(thead);
        tableContainer.appendChild(table);
        container.appendChild(tableContainer);
    }

    // Update table according to data
    var updateTable = function () {
        
        var dataTable = document.getElementById('table1');
        var tableHead = document.getElementById('table-head');
        var tbody = document.createElement('tbody');

        while (dataTable.firstChild) {
            dataTable.removeChild(dataTable.firstChild);
        }

        dataTable.appendChild(tableHead);

        // adding all students on a <tbody>
        for (var i = 0; i < students.length; i++) {
            
            var tr = document.createElement('tr');
            
            var td0 = document.createElement('td');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
            
            var btnDelete = document.createElement('button');
            var btnEdit = document.createElement('button');
            var imgTable = document.createElement('img');
            
            var spanForTrash = document.createElement('span');
            var spanForEdit = document.createElement('span');
            
            tbody.setAttribute('id', 'table1-tbody');

            tr.setAttribute('class', 'forAlertInfo');

            imgTable.setAttribute('src', students[i].img);
            
            btnDelete.setAttribute('type', 'button');
            btnDelete.setAttribute('class', 'btn btn-default');
            btnDelete.setAttribute('id', i);

            btnEdit.setAttribute('type', 'button');
            btnEdit.setAttribute('class', 'btn btn-default');
            btnEdit.setAttribute('id', i);

            spanForEdit.setAttribute('class', 'glyphicon glyphicon-edit');
            spanForTrash.setAttribute('class', 'glyphicon glyphicon-trash');
            
            imgTable.setAttribute('width', '40%');

            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            td0.innerHTML = i + 1;
            td1.innerHTML = students[i].name + ' ' + students[i].lastName;
            td2.innerHTML = students[i].email;
            td3.setAttribute('width', '15%');

            td3.appendChild(imgTable);
            td4.innerHTML = students[i].skills;
            
            btnEdit.appendChild(spanForEdit);
            btnDelete.appendChild(spanForTrash)
            
            td5.appendChild(btnEdit);
            td5.appendChild(btnDelete);

            // delete student and update a <tbody>
            btnDelete.onclick = (function () {
                
                return function () {
                    
                    // Ask a user 
                    if (confirm('Delete ?')) {
                        
                        var deleteId = this.getAttribute('id');
                        
                        // delete
                        students.splice(deleteId, 1);
                        
                        updateTable();
                        
                        refreshForm();
                    }
                };
            })();

            btnEdit.addEventListener('click', function () {
                
                var editId = this.getAttribute('id');
                
                // If the student is at the end of the table
                window.scrollTo(0, 0);
                
                updateForm(editId);
            
            }, false);

            tbody.appendChild(tr);
        }
        
        dataTable.appendChild(tbody);
    }

    // Set form for data edit
    var updateForm = function (id) {
        
        var nameField = document.getElementById('name');
        var lastNameField = document.getElementById('lastName');
        var emailField = document.getElementById('email');
        var pictureField = document.getElementById('picture');
        var skillsField = document.getElementById('skills');
            
        var saveButton = document.getElementById('btnSave');

        nameField.value = students[id].name;
        lastNameField.value = students[id].lastName;
        emailField.value = students[id].email;
        pictureField.value = students[id].img;
        skillsField.value = students[id].skills;

        saveButton.value = 'Update';
        saveButton.setAttribute('data-update', id);
    }

    // Save new data
    var saveData = function () {
        
        var newName = document.getElementById('name').value;
        var newEmail = document.getElementById('email').value;
        var newLastName = document.getElementById('lastName').value;
        var newPicture = document.getElementById('picture').value;
        var newSkills = document.getElementById('skills').value;
            
        var datatoAdd = {
            
            name: newName,
            lastName: newLastName,
            img: newPicture,
            email: newEmail,
            skills: newSkills.split(' ').join(',')
        };

        students.push(datatoAdd);
        
        updateTable();
    }

    // Update data
    var updateData = function (id) {
        
        var upName = document.getElementById('name').value;
        var upEmail = document.getElementById('email').value;
        var upLastName = document.getElementById('lastName').value;
        var upPicture = document.getElementById('picture').value;
        var upSkills = document.getElementById('skills').value;


        students[id].name = upName;
        students[id].email = upEmail;
        students[id].lastName = upLastName;
        students[id].img = upPicture;
        students[id].skills = upSkills.split(' ').join(',');

        updateTable();
    }

    //Reset the form
    var refreshForm = function () {
        
        var nameField = document.getElementById('name');
        var lastNameField = document.getElementById('lastName');
        var emailField = document.getElementById('email');
        var pictureField = document.getElementById('picture');
        var skillsField = document.getElementById('skills');
            
        var saveButton = document.getElementById('btnSave');

        // refresh
        nameField.value = '';
        emailField.value = '';
        lastNameField.value = '';
        pictureField.value = '';
        skillsField.value = '';
        
        saveButton.value = 'Save';
        saveButton.removeAttribute('data-update');
    }

    var sortTable = function () {
       
       var spanSortA_Z1 = document.getElementById('span-sort-a-z-1');
       var spanSortA_Z2 = document.getElementById('span-sort-a-z-2');
    
       var counterClick = 0; 

       var table1 = document.getElementById('table1');

       table1.onclick = function (e) {
          
            counterClick++;
        
            if (counterClick === 1) {
                
                if (e.target.tagName != 'TH') {
                   return 0;
                }
                
                // change img       
                spanSortA_Z1.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet-alt');
                spanSortA_Z2.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet-alt');
            
                sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
            }
            else {
            
                counterClick = 0;
                
                // change img 
                spanSortA_Z1.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet');
                spanSortA_Z2.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet');
            
                updateTable();
            }
        };

        function sortGrid(colNum, type) {
        
            var tbody = table1.getElementsByTagName('tbody')[0];

            var rowsArray = [].slice.call(tbody.rows);
            var compare;

            if (type === 'string') {
                
                compare = function(rowA, rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
                };
            }

            rowsArray.sort(compare);

            table1.removeChild(tbody);

            for (var i = 0; i < rowsArray.length; i++) {
                tbody.appendChild(rowsArray[i]);
            }

            table1.appendChild(tbody);
        }
    }

    var alertInfoAboutStudent = function () {
        
        var table = document.getElementById("table1");
        var rIndex;
            
        // table rows
        for (var i = 0; i < table.rows.length; i++) {
            // row cells
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                
                table.rows[i].cells[j].onclick = function () {
                    
                    rIndex = this.parentElement.rowIndex;
                        
                    var index = rIndex - 1;
                    var alertStr = students[index].name + ' ' + students[index].lastName + '. Email: ' + students[index].email + ' Skills: ' + students[index].skills;
                        
                    alert(alertStr);    
                };
            }
        }
    }

    // Main function
    var init = function () {
        
        setForm();
        
        setTableHead();
        
        updateTable();

        var btnSave = document.getElementById('btnSave');
        var btnRefresh = document.getElementById('btnRefresh');

        var form = document.getElementById('main-form');
        
        form.onsubmit = function () {
            
            if (btnSave.getAttribute('data-update')) {
                updateData(btnSave.getAttribute('data-update'));
            } 
            else {
                saveData();
            }
            
            refreshForm();

            return false;
        };
    
        btnRefresh.onclick = function () {
            refreshForm();
        };

        sortTable();

        alertInfoAboutStudent();
    };

    init(); //Intialize the table

})();