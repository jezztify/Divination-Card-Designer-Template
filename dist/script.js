/*
Hi, 

This is a Divination Card Template where you can create divination cards illustrations.

Important Note:
* Please give credits to whomever you take your assets from and read their license as needed.
* All assets including CSS and Arts in this sample template are grabbed from https://www.poewiki.net
* POEWIKI assets are licensed under https://creativecommons.org/licenses/by-nc-sa/3.0/ hence this is carried over. Don't worry, it's free to use as long as it is for Non-Commercial use and we give appropriate credits.

Versions:
1.0
* Initial release

2.0
* Added Designer Fields for easy customization

2.1 
* Added Save button to generate a PNG image and help do away with blurry screenshots
*/

$( document ).ready(() => {
    /*
    Form Script
    */
    $('#cardTitle').keyup((event)=>{
        $('.divicard-header').text($('#cardTitle').val());
    })

    $('#stacks').keyup((event)=>{
        $('.divicard-stack').text($('#stacks').val());
    })

    $('#imgurl').change((event)=>{
        $('#cardImg').attr('src', $('#imgurl').val());
    })
    let updateDescription = () => {
      var descriptionInputs = $('#description-group').find('input');
      var descriptionText = "";
      for(var i = 0; i < descriptionInputs.length; i++) {
        if(descriptionInputs[i].value) {
          descriptionText += `${descriptionInputs[i].value}<br>`;
        }
      }
      $('#description-span').html(descriptionText);
    }
    
    let bindDescription = () => {
      $('#description-group input').change((event)=>{
          updateDescription();
      })
      updateDescription();
    }
    
    let updateFlavour = () => {
      var flavourInputs = $('#flavour-group').find('input');
      var flavourText = "";
      for(var i = 0; i < flavourInputs.length; i++) {
        if(flavourInputs[i].value) {
          flavourText += `${flavourInputs[i].value}<br>`;
        }
      }
      $('#flavour-span').html(flavourText);
    }
    let bindFlavour = () => {
      $('#flavour-group input').change((event)=>{
          updateFlavour();
      })
      updateFlavour();
    }

    $('#flavour').keyup((event)=>{
        $('#flavour-span').html($('#flavour').val());
    })
  
  
    // Configuration Form Values 
    $('#cardTitle').val(
        $('.divicard-header').text()
    )
    $('#stacks').val(
        $('.divicard-stack').text()
    )
    
    $('#imgurl').val(
        $('#cardImg').attr('src')
    )
    
    var descriptionChildren = $('#description-span').children().not('br');
    for(var i = 0; i < descriptionChildren.length;i++) {
        var inputCopy = $('.copy').clone(true);
        $(inputCopy).find('input').attr('id', `desc-${i}`).attr('value',descriptionChildren[i].outerHTML);     
        $('.desc-add-more').append(inputCopy.html());
    }    
    bindDescription();
  
    var flavourChildren = $('#flavour-span').children().not('br');
    for(var i = 0; i < flavourChildren.length;i++) {
        var inputCopy = $('.copy').clone(true);
        $(inputCopy).find('input').attr('id', `flavour-${i}`).attr('value',flavourChildren[i].outerHTML);     
        $('.flavour-add-more').append(inputCopy.html());
    }
    bindFlavour();
    
    // DESCRIPTION +++
    $('#desc-add').click(() => {     
        var inputCopy = $('.copy').clone(true);
        var i = $('#description-group').find('input').length - 1;
        $(inputCopy).find('input').attr('id', `desc-${i}`);     
        $('.desc-add-more').append(inputCopy.html());
        bindDescription();
    });
  
    // FLAVOUR +++
    $('#flavour-add').click(function(){     
        var inputCopy = $('.copy').clone(true);
        var length = $('#flavour-group').find('input').length;
        var i = length;
        $(inputCopy).find('input').attr('id', `flavour-${i}`);     
        $('.flavour-add-more').append(inputCopy.html());    
        bindFlavour();
    });

    $('body').on('click','.remove',function(){     
        $(this).parents('.thisgroup').remove();
        bindFlavour();
        bindDescription();      
    }); 
    // )
    $('#flavour').val(
        document.getElementById('flavour-span').innerHTML
    )
    
    $('#save').click((event) => {
        event.preventDefault();
        html2canvas(document.getElementById('divCardView'), {
          allowTaint: true,
          useCORS: true
        }).then((canvas) => {
            var myImg = canvas.toDataURL('img/png');
            window.open(myImg)
        })
    })
})