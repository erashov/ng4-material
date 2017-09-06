import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {MdPaginator, MdSort, SelectionModel} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

/**
 * @title Feature-rich data table
 */