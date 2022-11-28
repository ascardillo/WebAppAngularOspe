export interface Usuario {    
    nombre:         string;
    apellido:       string;
    email:          string;
    administrador:  boolean;
}

export interface ResultUsuario {
    page:          number;
    results:       Usuario[];
    total_pages:   number;
    total_results: number;
}