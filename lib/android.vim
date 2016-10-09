au BufNewFile,BufRead *.xml,*.xml, set ft=xml syntax=xml
au BufNewFile,BufRead *.xml,*.xml, set ft=xml syntax=xml
au! fileType xml call s:setFileType()
au! fileType xml call s:setFileType()

function! s:setFileType()
    call emmetcompletions#setCompleter()
    set syntax=xml
endfunction
