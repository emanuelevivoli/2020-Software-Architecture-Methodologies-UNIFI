# 2020 Software Architecture Methodologies @ UniFi


<p align="center">
    <img src="University_of_Florence.png" alt="logo-UNIFI" width="300"/>
</p>


# Introduction
This folder contains code and documentations for the project "State Management Comparison" assigned in the class "Software Architecture Methodologies" 2020/2021.

The project aims to compare state-management methods in Angular applications. 
We took inspiration from [this blog](https://ordina-jworks.github.io/angular/2018/10/08/angular-state-management-comparison.html) and applied the best one in the project [segreteria-3smb](https://github.com/emanuelevivoli/segreteria-3smb) by using:
- plain rxjs
- Akita
- NgRx
- NgXs

## Description
Comparison application for state management solutions in Angular.

The branches are structured as follow:

- **master**: not functional, it has the fingerprint of an Angular project with facade service and not jet a storage;
- **storage-rxjs**: the storage is implemented with a service and BehaviorSubject properties, the implementation with rxjs;
- **storage-ngrx**: in the storage folder we have actions, reducers, selectors, effects and the storage as ngrx defines;
- **storage-ngxs**: in the storage folder we have the storage and the state object woth all methods described iinto the documentation;
- **storage-akita**: in the storage folder we have the service and the state, implementation using akita classes.

Checkout one of the other branches, to install packages you must run `npm install` whenever you get into a "storage-*" branch.
To run the Angular app you can run `ng serve` and visiting the application on `http://localhost:4200/`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

The documentation file **SWAM Report** aims to describe the comparison between those different method fot state managing.

# Contacts
If you are interested in something, don't hesitate to contact me or open an issue.

