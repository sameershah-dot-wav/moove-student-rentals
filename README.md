# Large Team Project - moove

Team members:

- Luke Morcom
- Nicholas White
- Ronan Manning
- Sameer Shah
- Liam Newman


## Problem

Take moove from a place where students can read reviews, to a platform where they can onboard and sign for properties digitally.


## Solution

Our platform provides the following features:

- Prospective tenants can submit an application to be able to rent on the moove platform
- moove staff can screen and approve/reject applicants
- Landlords can signup and add their properties to the platform
- Landlords can generate custom tenancy agreements
- Tenants can sign tenancy agreements


## Tech Stack

- React/Blade/Tailwind frontend
- Laravel backend interfacing with a MySQL DB via Eloquent ORM
- Containerised with Docker using Laravel's *Sail* utility


## Automated Testing

- Automated backend feature testing with PHPUnit


## Setup of development environment

You will need [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install) installed on your system. You will also need an LTS version of [Node.js](https://nodejs.org/en/) installed, along with NPM. (You can easily manage your Node version with a utility such as [nvm](https://github.com/nvm-sh/nvm))

### Laravel

1. Make sure you have Ubuntu set as your default WSL2 distro. To check which is your default, run `wsl -l -v` in a PowerShell window, and observe which distro has an asterisk next to it. To change the default, run `wsl -set-default *NameOfDistro*`.
2. Next, you'll need to clone the project into your WSL environment. Open a WSL terminal (you can do this by running 'Ubuntu' from your start menu), and follow the below steps:
   1. Begin in the `/home/*user*` directory
   2. Run `mkdir dev-environment` to create a working directory in which to house the project
   3. Run `cd dev-environment` to navigate to your new folder
   4. Pull down the project - run `git clone https://git.cardiff.ac.uk/c1537237/large-team-project-moove`
   5. Enter Cardiff credentials when prompted
3. Now that the source code is in your WSL environment, you need to build the docker containers.
   1. Run `cd large-team-project-moove`
   2. Run `cd laravel-moove`
   3. Install dependencies - copy and then run the command found [here](https://laravel.com/docs/9.x/sail#installing-composer-dependencies-for-existing-projects) in the Laravel docs
   4. Build the containers, by running `./vendor/bin/sail build`
   5. Finally, bring them up using `./vendor/bin/sail up`
4. Your docker environment is set up! Almost there. Now you'll need to open Docker Desktop, and open a CLI window into the MySQL container. In here, create a database called `laravel_moove`
5. Migrate and seed this database by coming back to your WSL terminal and running `./vendor/bin/sail artisan migrate:fresh --seed`. (Note: You can configure a bash alias to avoid typing the whole path to the sail command, read more [here](https://laravel.com/docs/9.x/sail#configuring-a-bash-alias))
6. Almost there! Now run `cp .env.example .env` to get an .env file
7. Finally, run `./vendor/bin/sail artisan key:generate` to set up an encryption key for the application.

### React/Tailwind

This project uses React/Tailwind on the frontend. Configuring these is as simple as running `npm install` from the `laravel-moove` directory.