import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodoItem from './reducers/todo-item.reducer';

export interface State {

  todoItem: fromTodoItem.State;
}

export const reducers: ActionReducerMap<State> = {

  todoItem: fromTodoItem.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
