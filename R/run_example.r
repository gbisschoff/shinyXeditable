run_example <- function(){
  library(shiny)
  devtools::load_all(".")
  
  shinyApp(
    ui = shiny::basicPage(
      editableText("id", "label"),
      textOutput("out")
    ),
    server = function(input, output, session){
      output$out <- renderText({input$id})
    }
  )
}
