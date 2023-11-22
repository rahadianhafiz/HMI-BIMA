/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";


function Projects() {
  const { columns, rows } = data();
  return (
    <Card
      sx={{
        height: "100%", backgroundColor: "light"
      }}
    >
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="10px" mt="5px">
        <VuiBox mb="auto">
          <VuiTypography color="white" variant="h4" fontWeight="bold" ml="8px" gutterBottom>
            Hourly Load Table
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox
        pl= "30px"
        pr= "20px"
        sx={{
          "& th": {
            borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
              `${borderWidth[2]} solid ${grey[500]}`,
          },
          "& .MuiTableRow-root": {
            "& td": {
              borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                `${borderWidth[1]} solid ${grey[700]}`
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </VuiBox>
    </Card>
  );
}

export default Projects;
