au BufNewFile,BufRead *.xml set ft=android_xml syntax=xml
au BufNewFile,BufRead *.xml set ft=android_xml syntax=xml
au! fileType android_xml call s:setFileType()
au! fileType android_xml call s:setFileType()

function! s:setFileType()
    if expand('%:p')=~'res/layout'
        call emmetcompletions#setCompleter()
    endif
endfunction
