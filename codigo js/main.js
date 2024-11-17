function tablas() {

  // Establecer un punto de depuración para verificar el funcionamiento paso a paso en el navegador
  debugger

  // Declaración de variables:
  // 'resp' para el elemento donde se mostrará el resultado
  // 'tab' para el número de la tabla de multiplicar
  // 'ini' y 'fin' para el rango inicial y final de la tabla
  // 'r' para almacenar el resultado de cada multiplicación
  // 'msg' para acumular el mensaje final que se mostrará en la pantalla
  let resp = "", tab = "", ini = "", fin = "", r = 0, msg = ""

  // Cambia el contenido de un elemento con id "h" a "Tabla de Sumar"
  document.getElementById("h").innerHTML = "Tabla de Sumar"

  // Captura el valor de la tabla de multiplicar del elemento con id "tabla"
  tab = document.getElementById("tabla").value

  // Captura el valor inicial del rango desde el elemento con id "vi"
  ini = document.getElementById("vi").value

  // Captura el valor final del rango desde el elemento con id "vf"
  fin = document.getElementById("vf").value

  // Asigna el elemento con id "resp" a la variable 'resp' para mostrar el resultado después
  resp = document.getElementById("resp")

  // Convierte los valores capturados 'tab', 'ini', y 'fin' de cadena de texto a enteros
  tab = parseInt(tab)
  ini = parseInt(ini)
  fin = parseInt(fin)

  // Bucle para calcular la tabla de multiplicar desde el valor 'ini' hasta el valor 'fin'
  while (ini <= fin) {
    // Calcula el producto de 'ini' por 'tab' y lo asigna a 'r'
    r = ini * tab

    // Acumula el resultado en 'msg' usando una plantilla de cadena para mostrar cada operación
    msg = msg + `${ini} * ${tab} = ${r}` + "\n"

    // Incrementa 'ini' en 1 para pasar al siguiente número en el rango
    ini = ini + 1
  }

  // Asigna el mensaje acumulado 'msg' al contenido de 'resp', mostrando la tabla en pantalla
  resp.innerHTML = msg
}
