export function unirRuta(base: string, ruta = ""): string {
  const baseConBarra = base.endsWith("/") ? base : `${base}/`;
  return `${baseConBarra}${ruta.replace(/^\/+/, "")}`;
}

export function url(ruta = ""): string {
  return unirRuta(import.meta.env.BASE_URL, ruta);
}
