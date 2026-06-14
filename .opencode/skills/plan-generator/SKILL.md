---
name: plan-generator
description: >
  Genera planes de desarrollo técnicos detallados para tareas complejas de software, descomponiéndolas en subtareas estructuradas con contexto del problema, estrategia de solución, archivos afectados, pasos de implementación, sección de documentación y un tablero de seguimiento final. Usar SIEMPRE que el usuario mencione "hacer un plan", "planificar", "plan de implementación", "cómo implementar", "desglosar tarea", "organizar el desarrollo de", o cuando la tarea sea compleja y requiera múltiples pasos de código. También usar cuando el usuario pida ayuda para estructurar el trabajo en un proyecto de software, aunque no use la palabra "plan" explícitamente.
---

# Plan Generator

Skill para generar planes de desarrollo técnicos completos, listos para ejecutar y dejar como documentación del equipo.

## Cuándo usar esta skill

- El usuario dice "hacé un plan", "planificá esto", "plan de implementación para..."
- La tarea involucra múltiples archivos, capas de la aplicación o etapas de desarrollo
- El usuario quiere organizar trabajo antes de ponerse a codear
- Se está arrancando un feature, módulo, o microservicio nuevo
- La tarea tiene dependencias entre partes (ej: primero la entidad, luego el repo, luego el endpoint)

---

## Proceso de generación del plan

### 1. Analizar el contexto antes de escribir

Antes de generar el plan, identificá:

- **Stack tecnológico** del proyecto (lenguaje, framework, DB, herramientas)
- **Alcance real** de la tarea: ¿cuántas capas toca? ¿hay integraciones externas?
- **Dependencias entre subtareas**: qué debe estar listo antes de empezar cada parte
- **Convenciones del proyecto** si hay código existente (nombrado, estructura de paquetes, patrones usados)

Si el usuario no dio suficiente contexto, hacé **una sola pregunta** que desbloquee lo más importante. No pidas todo de una; preferí arrancar con suposiciones razonables y aclararlas al inicio del plan.

### 2. Estructura del archivo de plan

Generá el plan como un archivo Markdown. Nombralo `PLAN-<nombre-descriptivo>.md`. Seguí **exactamente** esta estructura:

---

```markdown
# Plan: <Título descriptivo de la tarea>

> **Proyecto:** <nombre del repo o módulo>
> **Fecha:** <fecha actual>
> **Autor del plan:** <si se sabe, si no omitir>
> **Estado:** 🔄 En progreso

## Contexto general

<Descripción de 3-5 oraciones explicando el problema de negocio o técnico que se está resolviendo, por qué importa, y qué resultado se espera al finalizar. No mezclar con detalles de implementación.>

## Suposiciones y restricciones

- <Suposición 1: algo que se asume verdadero para arrancar>
- <Restricción 1: algo que no se puede cambiar o está fuera de alcance>

---

## Subtareas

<!-- Repetir este bloque por cada subtarea -->

### ST-01 — <Nombre corto de la subtarea>

**Problema que resuelve:**
<Una o dos oraciones explicando qué falla, falta o necesita existir en el sistema. Orientado al problema, no a la solución.>

**Estrategia de solución:**
<Explicación técnica de cómo se va a resolver: patrones usados, decisiones de diseño, herramientas específicas. Suficiente detalle para que otro dev entienda el approach sin leer el código.>

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| CREAR  | `src/...` | Descripción breve |
| MODIFICAR | `src/...` | Qué cambia y por qué |

**Pasos de implementación:**

1. <Paso concreto y ejecutable. Orientado a acciones: "Crear la clase X", "Agregar el método Y en Z">
2. <Incluir detalles relevantes: nombre exacto de clases, anotaciones, campos importantes>
3. <Si un paso tiene un sub-detalle técnico importante, incluirlo con sangría o nota>
4. <El último paso siempre debe ser verificar que funciona: test, endpoint, log, etc.>

**✅ Implementación (completar al terminar):**

> _Documentación para el equipo — completar cuando la subtarea esté lista._

- [ ] Qué se creó / cambió (resumen ejecutivo)
- [ ] Decisiones tomadas durante la implementación (si hubo desviaciones del plan)
- [ ] Problemas encontrados y cómo se resolvieron
- [ ] Cómo verificar que está funcionando correctamente

---

### ST-02 — <Nombre corto>

[... mismo bloque ...]

---

## Tablero de progreso

| ID | Subtarea | Estado | Responsable | Notas |
|----|----------|--------|-------------|-------|
| ST-01 | <nombre> | ⬜ Pendiente | — | — |
| ST-02 | <nombre> | ⬜ Pendiente | — | — |

**Leyenda:** ⬜ Pendiente · 🔄 En progreso · ✅ Completada · ⚠️ Bloqueada
```

---

## Guía para generar subtareas de calidad

### Granularidad correcta

Cada subtarea debe poder completarse en una sesión de trabajo (2-4 horas para una persona). Si una subtarea es demasiado grande, dividila. Si dos subtareas siempre se hacen juntas y son muy pequeñas, unilas.

**Ejemplos de granularidad correcta:**
- ✅ "Crear la entidad `Payment` con sus campos y validaciones JPA"
- ✅ "Implementar el endpoint POST /payments con validación del request"
- ❌ "Implementar todo el módulo de pagos" (demasiado grande)
- ❌ "Agregar el campo `amount` a la entidad" (demasiado pequeño, juntar con otros campos)

### Orden de las subtareas

Seguí el flujo natural de dependencias. En proyectos backend típicos (Spring Boot, Node, etc.):

1. Modelo de datos / entidad
2. Repositorio / acceso a datos
3. Lógica de negocio / service
4. API / endpoints / controllers
5. Configuración (seguridad, CORS, variables de entorno)
6. Tests de integración / e2e
7. Documentación / OpenAPI / migrations finales

### Archivos afectados — nivel de detalle esperado

La tabla de archivos debe ser lo suficientemente específica para que el dev pueda abrir el proyecto y saber exactamente dónde ir. Incluí la ruta completa desde la raíz del proyecto.

```
✅ src/main/java/com/example/payments/domain/Payment.java
❌ Payment.java
❌ la entidad
```

### Pasos de implementación — tono y nivel de detalle

Los pasos son instrucciones, no descripciones. Usá el imperativo:

```
✅ "Crear la clase Payment en el paquete domain con los campos: id (UUID), amount (BigDecimal), status (enum)"
✅ "Anotar la clase con @Entity, @Table(name = 'payments') y agregar @Id con @GeneratedValue"
❌ "La clase Payment necesita ser una entidad JPA"
❌ "Hacer la entidad"
```

---

## Sección de implementación — cómo completarla

La sección **✅ Implementación** es la más importante para el equipo. Es documentación viva que se escribe *mientras* o *justo después* de terminar cada subtarea. Pedile al usuario que la complete, o completala vos si estás ejecutando el plan.

Lo que debe capturar:
- Qué se hizo exactamente (no copiar los pasos, sino resumir el resultado)
- Si hubo alguna decisión diferente al plan original, explicar por qué
- Cualquier "gotcha" o problema no obvio que apareció
- El comando o endpoint exacto para verificar que funciona

**Ejemplo de sección bien completada:**

```markdown
**✅ Implementación:**
- Se creó la entidad `Payment` con UUID autogenerado. Se decidió usar `BigDecimal` para `amount` 
  en vez de `Double` para evitar errores de punto flotante en operaciones financieras.
- Problema: Flyway no reconocía el enum `PaymentStatus` en PostgreSQL. 
  Solución: crear el tipo ENUM en la migración antes de la tabla.
- Verificación: `SELECT * FROM payments;` retorna vacío pero sin errores después de correr la app.
```

---

## Actualización del tablero de progreso

Cuando una subtarea se completa, el tablero se actualiza así:

| ID | Subtarea | Estado |
|----|----------|--------|
| ST-01 | Crear entidad Payment | ✅ Completada |
| ST-02 | Implementar repositorio | 🔄 En progreso |

Recordá al usuario actualizar el tablero y la sección de implementación **al completar** cada subtarea, no al finalizar todo el plan.

---

## Presentación del plan al usuario

Después de generar el plan:

1. **Crear el archivo** `PLAN-<nombre>.md` en el directorio del proyecto (o en `/home/claude/` si no hay proyecto en contexto)
2. **Presentar el archivo** con `present_files`
3. **Dar un resumen** de 3-4 líneas: cuántas subtareas, orden lógico, qué está excluido del alcance si hubo decisiones de scope
4. **Ofrecer ajustes**: "¿Querés que agregue/cambie/subdivida algo?"

No generar el plan inline en el chat como texto — siempre como archivo `.md` descargable.

---

## Referencia rápida: checklist antes de entregar el plan

Antes de presentar el plan, verificá mentalmente:

- [ ] Cada subtarea tiene los 5 bloques: problema, estrategia, archivos, pasos, sección de implementación vacía para completar
- [ ] Los archivos en la tabla tienen rutas completas desde la raíz
- [ ] Los pasos están en imperativo y son ejecutables
- [ ] El orden de subtareas respeta las dependencias
- [ ] El tablero de progreso al final lista todas las subtareas
- [ ] El archivo tiene nombre descriptivo: `PLAN-<nombre-corto>.md`