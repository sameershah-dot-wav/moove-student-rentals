import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppNavBar from './AppNavBarCustom';
import ButtonNavCustom from '../buttons/ButtonNav';
import { navTextAdmin, navTextTenant, navTextLandlord } from '../../assets/texts/NavTexts';
import NavBarHeader from '../headers/NavBarHeader';
import mooveLogo from '../../assets/images/moove_logo_nobg.png';
import AppTheme from '../../assets/theme/theme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	root: {
		padding: '8px 25px !important',
		fontWeight: 'bold !important',
		borderRadius: '5px !important',
		marginRight: '5px !important',
		backgroundColor: `${AppTheme.palette.logout.light} !important`,
		color: `${AppTheme.palette.logout.dark} !important`,
		'&:hover': {
			backgroundColor: `${AppTheme.palette.logout.dark} !important`,
			color: `${AppTheme.palette.logout.light} !important`
		}
	}
}));

const NavBar = ({ text, currentPage }) => {
  // const [currentPage, setCurrentPage] = useState({})
	const classes = useStyles();
	let navOptions = '';

	if (text === 'ADMIN') {
		navOptions = navTextAdmin;
	} else if (text === 'LANDLORD') {
		navOptions = navTextLandlord;
	} else {
		navOptions = navTextTenant;
	}

	// Pages on navbar. Selected parameter for determining which page user currently on.
	const [ pages, setPages ] = useState(navOptions);

	// Source current page from parent, assign true value to state within navbar.
	useEffect(
		() => {
			let pagesUnselected = pages;

			// Reset all current pages before calculation.
			for (let index = 0; index < pages.length; index++) {
				pagesUnselected[index].selected = false;
			}

			// Filter out any page that does not match current page.
			const tempPages = pagesUnselected.filter((value) => value.name !== currentPage);
			// Collect any remaining value from array and confirm matches current page.
			const tempPage = pagesUnselected.find((value) => value.name === currentPage);

			// If page exists, set as current page and push back into array state.
			if (tempPage) {
				tempPage.selected = true;
				tempPages.push(tempPage);
				tempPages.sort((a, b) => (a.id > b.id ? 1 : -1));
				setPages(tempPages);
			}
		},
		[ currentPage ]
	);

	const handleCloseNavMenu = (link) => {
		navigate(link);
	};

	return (
		//Custom App bar styling.
		<AppNavBar navColor={text}>
			<Grid container alignItems={'center'} justifyContent={'space-between'}>
				{/* moove image. */}
				<Box sx={{ display: 'flex' }}>
					<img alt="moove logo" style={{ height: '40px' }} src={mooveLogo} />
				</Box>
				{/* Navigation header */}
				<Box sx={{ display: 'flex' }}>
					<NavBarHeader colorName={text} />
				</Box>
				{/* Navigation buttons */}
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					{pages.map((page) => {
						return (
							<div>
								<a href={page.link}>
									<ButtonNavCustom page={page} navColor={text} key={page.key}>
										{page.name}
									</ButtonNavCustom>
								</a>
								{/* {page.key !== "page_logout" ? (                    
                <ButtonNavCustom
                      to={page.link}
                      navColor={navColorChoice}
                      key={page.key}
                    >

                    {page.name}
                    </ButtonNavCustom>) : (                    
                    <ButtonNavCustom
                      navColor={navColorChoice}
                      key={page.key}
                      to={page.link}
                    >
                        <form method="POST"  action={page.link}>
                          <input type="hidden" name="_token" value={csrf_token} />
                          {page.name}
                        </form>
                    </ButtonNavCustom>)} */}

								{/* {page.selected ? (
                    <ButtonNavCustom
                      to={page.link}
                      navColor={navColorChoice}
                      key={page.key}
                    >
                      {page.name}
                    </ButtonNavCustom>
                  ) : (
                    <ButtonNavCustom
                      to={page.link}
                      navColor={navColorChoice}
                      key={page.key}
                    >
                      {page.name}
                    </ButtonNavCustom>
                  )} */}
							</div>
						);
					})}
					<form method="POST" action="/logout">
						<input type="hidden" name="_token" value={csrf_token} />
						<Button type="submit" className={classes.root}>
							Logout
						</Button>
					</form>
				</Box>
			</Grid>
		</AppNavBar>
	);
};
export default NavBar;