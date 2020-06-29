import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Service } from 'src/app/api/service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Acciones } from './action';
import { undo } from 'ngrx-undo';

export class Effects {

  constructor(private actions: Actions,
              private service: Service,
              private actionE: Acciones,
              private fields: string[],
              private campo: string) {}

  public loadEntities = createEffect(() => {
    return this.actions.pipe(
      ofType(this.actionE.itemsE),
      switchMap(() => {
        return this.service.getItems(this.fields).pipe(
          map((res: any) => {
            console.log(res);
            console.log(res.data[this.campo + 's']);
            return this.actionE.itemsSuccessE({
              data: res.data[this.campo + 's']
            });
          }),
          catchError(error =>
            of(
              this.actionE.itemsFailE({
                error
              })
            )
          )
        );
      }
      )
    );
  });

  public loadEntity = createEffect(() =>
    this.actions.pipe(
      ofType(this.actionE.itemE),
      switchMap(({ id }) => {
        return this.service.getItem(id, this.fields).pipe(
          map((res: any) => {
            console.log(res.data[this.campo]);
            return this.actionE.itemSuccessE({
              entity: res.data[this.campo]
            });
          }),
          catchError(error => {
            return of(
              this.actionE.itemFailE({
                error
              })
            );
          })
        );
      }
      )
    )
  );

  public updateEntity = createEffect(() =>
    this.actions.pipe(
      ofType(this.actionE.update),
      switchMap(action => {
        return this.service.updateItem(action.update, this.fields).pipe(
          map((res: any) => {
            return this.actionE.updateSuccess({
              entity: res.data[this.campo]
            });
          }),
          catchError(error => {
            return of(
              this.actionE.updateFail({
                error
              }),
              undo(action)
            );
          })
        );
      }
      )
    )
  );

  public createEntity = createEffect(() =>
    this.actions.pipe(
      ofType(this.actionE.create),
      switchMap(action =>
        this.service.createItem(action.new, this.fields).pipe(
          map((res: any) => {
            return this.actionE.createSuccess({
              entity: res.data[this.campo]
            });
          }),
          catchError(error => {
            return of(
              this.actionE.createFail({
                error
              }),
              undo(action)
            );
          })
        )
      )
    )
  );

  public deleteEntity = createEffect(() =>
    this.actions.pipe(
      ofType(this.actionE.deleteA),
      switchMap(action =>
        this.service.deleteItem(action.id).pipe(
          map((res: any) => {
            return this.actionE.deleteSuccess();
          }),
          catchError(error => {
            return of(
              this.actionE.deleteFail({
                error
              }),
              undo(action)
            );
          })
        )
      )
    )
  );
}
