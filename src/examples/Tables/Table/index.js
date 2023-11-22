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
import * as React from 'react';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id

// @mui material components
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

import Pagination from '../Pagination';


function Table({ columns, rows }) {
  const { grey } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  const renderColumns = columns.map(({ name, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }
    
    const displayName = name.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")

    return (
      <VuiBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3} 
        pr={align === "right" ? pr : 3}
        textAlign= {align}
        fontSize= {size.sm}
        fontWeight={fontWeightBold}
        color="text"
        opacity={0.9}
        borderBottom={`${borderWidth[1]} solid ${grey[700]}`}
      >
        {displayName}
      </VuiBox>
    );
  });

  const renderRows = (row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;
        template = (
          <VuiBox
            component="td"
            p={1}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[400]}` : null}
            width= "150px"
          >
            <VuiTypography
              
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ display: "inline-block", width: "max-content"}}
            >
              {row[name]}
            </VuiTypography>
          </VuiBox>
        );
      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  };


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (
    <TableContainer
    sx={{
      boxShadow: "0rem 0rem 05rem 0rem rgba(0, 0, 0, 0.0)",
    }}
    >
      <MuiTable >
        <VuiBox component="thead" overflow= "auto">
          <TableRow>{renderColumns}</TableRow>
        </VuiBox>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
              ).map((row) => renderRows(row))}
            {emptyRows > 0 && (
              <VuiBox colSpan={columns.length }/>
            )}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={columns.length }
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
                native: false,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={Pagination}
              sx={{
                color: "grey.400",
                fontSize: "0.75rem !important", 
                backgroundColor: "transparent!important",
                borderBottom: "0px solid transparent",
                "& .css-2oc50a-MuiSelect-select-MuiInputBase-input.css-2oc50a-MuiSelect-select-MuiInputBase-input.css-2oc50a-MuiSelect-select-MuiInputBase-input": {
                  minWidth: "0px"
                },
                ".MuiToolbar-root, .MuiTablePagination-toolbar":{
                  paddingTop: "1rem",
                },
                ".MuiInputBase-root, .MuiTablePagination-select":{
                    width:"auto !important",
                    padding: "0.25rem 0rem",  
                    fontSize: "0.8rem" 
                },
                "& .css-and1p2-MuiInputBase-root-MuiTablePagination-select":{
                  marginRight: "1rem", 
                },
                ".MuiTablePagination-selectLabel":{
                  fontSize: "0.8rem",   
                },
                ".MuiTablePagination-displayedRows":{
                  fontSize: "0.8rem",   
                },
                ".css-60999s-MuiButtonBase-root-MuiIconButton-root":{
                  color: "rgba(160,174,192, 0.8)",   
                },
                ".css-60999s-MuiButtonBase-root-MuiIconButton-root.Mui-disabled":{
                  color: "rgba(160,174,192, 0.2)",   
                },               
              }}
            />
    
        </TableFooter>
      </MuiTable>
    </TableContainer>
  );
};

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
