editableText <- function(inputId, label, icon = NULL, type = "text", mode = "inline", ...) {
  
  value <- restoreInput(id = inputId, default = NULL)
  
  addResourcePath(
    prefix = 'wwwXeditable', directoryPath = system.file('www', package='shinyXeditable')
  )
  
  tagList(
    
    singleton(tags$head(
      tags$script(src="wwwXeditable/js/bootstrap-editable.min.js"),
      tags$script(src="wwwXeditable/js/bootstrap-editable-binding.js"),
      tags$link(rel="stylesheet", type="text/css", href="wwwXeditable/css/bootstrap-editable.css")
    )),
    

    tags$a(
      id = inputId,
      href = "#",
      class = "editable editable-click editabletext",
      `data-val` = value,
      "data-mode" = tolower(mode),
      "data-type" = tolower(type),
      list(
        icon,
        label
      ), 
      ...)
  )
}