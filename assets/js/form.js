function showPhase(phase) {
    // Hide all phases
    $('#phase1, #phase2, #phase3').hide();

    // Show the selected phase
    $('#phase' + phase).show();

    // Update progress bar and text
    $('.progress-bar').css('width', (phase - 1) * 33 + '%');

    // Update progress text based on the current phase
    switch (phase) {
        case 1:
            $('#progressText').text('');
            break;
        case 2:
            $('#progressText').text(' WEIR');
            break;
        case 3:
            $('#progressText').text(' DESANDER');
            break;
        default:
            break;
    }
}