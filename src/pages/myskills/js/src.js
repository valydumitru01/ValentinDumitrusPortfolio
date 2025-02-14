// =============== INITIALIZE DATATABLES ===============
$(document).ready(function () {
    // For each software table, enable paging, searching, etc.
    for (let i = 0; i < index; i++) {
        $("#softTable" + i).DataTable({
                                          paging: true,
                                          searching: true,
                                          info: true,
                                          order: [[0, 'asc']] // sort by 'Name' by default
                                      });
    }
    // If you want DataTables for languages table as well:
    $("#languagesTable").DataTable({
                                       paging: true,
                                       searching: true,
                                       info: true
                                   });
});
