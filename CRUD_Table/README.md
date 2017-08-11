# FL-DOM

 - You cannot change smth in index.html
 - Create the table of the students, which  has the following titles : “Student”(name + lastname), “email”, “Profile picture”, “Skils”, “controls”(edit, remove) . Hint:
  for remove use class ‘glyphicon glyphicon-trash’;
  for edit ‘glyphicon glyphicon-edit’;
  for table ‘table table-hover’.
 
 - Show alert with with student when user clicks to the table row(hint: add listener to the tbody)
 - Before table add form with following fields:
  Name;
  Lastname;
  Email;
  Profile picture
  Skils
  Save button(should add student from the form to the array with the students, clear form and update the table)
  Cancel button(should clear the form)

 - Create edit functionality. When user clicks on edit button the form should be filled in with student’s data. When user presses Save, the student should be edited to array and table should be updated. When user clicks the cancel button the form should be empty.
 - Create remove functionality. When user clicks on the remove button, student should be removed from array and table should be updated.
 - Add validation to the form:
  Name, lastname, profile picture cannot be empty
  Email cannot be empty and should be email
  Skills should be comma separated string
 - Add sorting functionality by click on each of the table header. When user clicks first time the table should be sorted A->Z when second time Z->A.
 - Add sort icons: 
  Not sorted ‘glyphicon glyphicon-sort’
  Sorted A->Z ‘glyphicon glyphicon-sort-by-alphabet’
  Sorted Z->A ‘glyphicon glyphicon-sort-by-alphabet-alt’
