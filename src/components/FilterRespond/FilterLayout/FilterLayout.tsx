import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Checkbox,
  Autocomplete,
  TextField,
  InputAdornment,
} from '@mui/material';
import del from '../../../assets/delete.svg';
import SearchIcon from '@mui/icons-material/Search';
import {ListItemButtonCustom} from '../CustomListItemButton/CustomListItemButton'

export default function FilterLayout() {
  const [openStatus, setOpenStatus] = React.useState(false);
  const [openСity, setOpenCity] = React.useState(false);
  const [openSalary, setOpenSalary] = React.useState(false);
  const [openFormat, setOpenFormat] = React.useState(false);
  const [openPortfolio, setOpenPortfolio] = React.useState(false);

  const handleClickStatus = () => {
    setOpenStatus(!openStatus);
  };

  const handleClickCity = () => {
    setOpenCity(!openСity);
  };
  const handleClickSalary = () => {
    setOpenSalary(!openSalary);
  };
  const handleClickFormat = () => {
    setOpenFormat(!openFormat);
  };
  const handleClickPortfolio = () => {
    setOpenPortfolio(!openPortfolio);
  };

  const listCityMok = [
    {
      id: 1,
      name: 'Москва',
    },
    {
      id: 2,
      name: 'Питер',
    },
    {
      id: 3,
      name: 'Калнинград',
    },
  ];

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButtonCustom  onClick={handleClickStatus}>
        <ListItemText primary="Статус" />
        {openStatus ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCustom>
      <Collapse in={openStatus} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCustom>
            <Checkbox />

            <ListItemText primary="Откликнулись" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <Checkbox />

            <ListItemText primary="Без отклика" />
          </ListItemButtonCustom>
        </List>
      </Collapse>

      <ListItemButtonCustom onClick={handleClickCity}>
        <ListItemText primary="Город" />
        {openСity ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCustom>
      <Collapse in={openСity} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCustom>
            <Autocomplete
              disableCloseOnSelect
              filterSelectedOptions
              disablePortal
              options={listCityMok}
              getOptionLabel={(option) => option.name}
              sx={{ width: '330px' }}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Поиск по названию"
                />
              )}
            />
          </ListItemButtonCustom>
        </List>
      </Collapse>

      <ListItemButtonCustom onClick={handleClickSalary}>
        <ListItemText primary="Зарплата" />
        {openSalary ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCustom>
      <Collapse in={openSalary} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ display: 'flex', flexDirection: 'row', gap: '5px', justifyContent: 'center' }}>
       
            <TextField sx={{
                width: '120px',
                '& input': {
                    padding: '9px 5px'
                }
            }} placeholder="От"  />
            <TextField sx={{
                width: '120px',
                '& input': {
                    padding: '9px 5px'
                }
            }} placeholder="До"  />
   
        </List>
      </Collapse>

      <ListItemButtonCustom onClick={handleClickFormat}>
        <ListItemText primary="Форматы работы" />
        {openFormat ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCustom>
      <Collapse in={openFormat} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCustom>
            <Checkbox />

            <ListItemText primary="Офис" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <Checkbox />

            <ListItemText primary="Гибрид" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <Checkbox />

            <ListItemText primary="Удаленка" />
          </ListItemButtonCustom>
        </List>
      </Collapse>

      <ListItemButtonCustom onClick={handleClickPortfolio}>
        <ListItemText primary="Наличие портфолио" />
        {openPortfolio ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCustom>
      <Collapse in={openPortfolio} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButtonCustom>
            <Checkbox />

            <ListItemText primary="Есть портфолио" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <Checkbox />

            <ListItemText primary="Есть сопроводительное письмо" />
          </ListItemButtonCustom>
        </List>
      </Collapse>

      <ListItemButtonCustom
        sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
      >
        <img src={del} alt={'delete'} />
        <ListItemText primary="Отчистить фильтры" />
      </ListItemButtonCustom>
    </List>
  );
}
