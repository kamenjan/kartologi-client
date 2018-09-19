Think about the actual structure. For example; if sidebar is included on all 
scenes it makes sense to exclude it from router so it does not get re-rendered
every time.

scenes
    Home
    Calendar
    Post
    Upload
    Admin
    
components
    header
    menu
    sidebar
    carousel (posts, images, graphs, ...)
    PostSummary
    Calendar
    Table (for generating custom tables using event.wer data)
    