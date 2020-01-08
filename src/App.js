import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles'; 

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1000
  }
})

const Customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '서민수1',
  'birthday': '11111',
  'gender': '여자',
  'job': '프리랜서'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '서민수2',
  'birthday': '22222',
  'gender': '남자',
  'job': '개인사업'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '서민수3',
  'birthday': '22222',
  'gender': '남자',
  'job': '회사원'
}]

class App extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Customers.map(c => {
                return (
                  <Customer
                    id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>      
    );
  }
}

export default withStyles(styles)(App);
