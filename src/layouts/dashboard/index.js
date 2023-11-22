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
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";


import Projects from "layouts/dashboard/components/Projects";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import DatePick from "examples/DatePick";

function Dashboard() {
  const { gradients } = colors;
  return (
    <DashboardLayout>
      <DashboardNavbar/>
        <VuiBox py={2}>
          <VuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12} xl={12}>            
                <Card>
                  <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="15px" mt="0px">
                    <VuiBox mb="auto">
                      <VuiTypography color="white" variant="h4" fontWeight="bold" ml="8px" gutterBottom>
                        Hourly Load
                      </VuiTypography>
                      <VuiBox display="flex" alignItems="center" lineHeight={0}>
                        <VuiTypography variant="h6" fontWeight="regular" color="text" ml="8px" mt="-8px">
                          Gedung LABTEK IX
                        </VuiTypography>
                      </VuiBox>
                    </VuiBox>
                    <VuiBox mt="10px">
                      <DatePick                      
                      />
                    </VuiBox>
                  </VuiBox>
                  <VuiBox sx={{ height: "400px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />                    
                  </VuiBox>
                </Card>
              </Grid>
            </Grid>
          </VuiBox>
          <Grid container spacing={3} >
            <Grid item xs={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center">
              <Projects/>
            </Grid>
          </Grid>
        </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
