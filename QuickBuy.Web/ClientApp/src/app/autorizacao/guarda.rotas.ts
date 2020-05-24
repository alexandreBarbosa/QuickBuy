import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioServico } from "../servicos/usuario/usuario.servico";

@Injectable({
  providedIn:'root'
})
export class GuardaRotas implements CanActivate {
  //private router: Router;
  constructor(private router: Router, private usuarioservico: UsuarioServico) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   

    if (this.usuarioservico.usuario_autenticado()) {
      return true;
    }
    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
      //se usuario autenticado
      return false;
    }


}
