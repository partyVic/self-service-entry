
// customise & overwrite Fullcalendar style
import styled from "@emotion/styled";

const StyleWrapper = styled.div`
.fc-button.fc-prev-button, .fc-button.fc-next-button, .fc-button.fc-button-primary {
    background: rgb(32,116,204);
    background-image: none;
}
.fc-toolbar-title, .fc-col-header-cell-cushion {
    color: #5624d0;
}
.fc-daygrid-day {
    cursor:pointer
}
.fc-today-button {
    text-transform: capitalize
}
`

export default StyleWrapper