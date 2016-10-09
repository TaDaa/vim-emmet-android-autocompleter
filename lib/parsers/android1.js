var map = {};
function parse (element) {
    var children,content,extension,base,name,proto,self;
    if (children = element.children) {
        for (var i=0,ln=children.length;i<ln;i++) {
            parse(children[i]);
        }
    }
    if (element.tagName === "XS:COMPLEXTYPE") {
        name = element.getAttribute('name');
        if (!(self=map[name])) {
            self = map[name] = function () {}
        }
        if (element.children && element.children.length !== 1) {
            proto = self.prototype;
            children = element.children;
            for (i=0,ln=children.length;i<ln;i++) {
                attribute = children[i];
                if (attribute.tagName !== 'XS:ATTRIBUTE') {
                    console.error('not attribute',attribute);
                } else {
                    proto[attribute.getAttribute('ref')] = true;
                }
            }
        } else {
            if ((content=element.children[0]).tagName !== 'XS:COMPLEXCONTENT') {
                if (content.tagName === 'XS:ATTRIBUTE') {
                    proto = self.prototype;
                    children = element.children;
                    for (i=0,ln=children.length;i<ln;i++) {
                        attribute = children[i];
                        if (attribute.tagName !== 'XS:ATTRIBUTE') {
                            console.error('not attribute',attribute);
                        } else {
                            proto[attribute.getAttribute('ref')] = true;
                        }
                    }
                } else {
                    console.error('not complexcontent',element);
                }
            } else {
                if (content.children && content.children.length !== 1) {
                    console.error('content child nodes not 1',content);
                } else {
                    if ((extension = content.children[0]).tagName !== 'XS:EXTENSION') {
                        console.error('not extension',content);
                    } else {
                        base = extension.getAttribute('base');
                        if (!base) {
                            console.error('no base',extension);
                        } else {
                            if (!map[base]) {
                                map[base] = function () {};
                            }
                            proto = self.prototype = new map[base];
                            children = extension.children;
                            for (i=0,ln=children.length;i<ln;i++) {
                                attribute = children[i];
                                if (attribute.tagName !== 'XS:ATTRIBUTE') {
                                    console.error('not attribute',attribute);
                                } else {
                                    proto[attribute.getAttribute('ref')] = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


var a=`<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:android="http://schemas.android.com/apk/res/android" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:import schemaLocation="schemas.android.com.apk.res.android.xsd" namespace="http://schemas.android.com/apk/res/android"></xs:import>
  <xs:group name="any-view">
    <xs:choice>
      <xs:element ref="GLSurfaceView"></xs:element>
      <xs:element ref="AdapterView"></xs:element>
      <xs:element ref="AdapterViewAnimator"></xs:element>
      <xs:element ref="AutoCompleteTextView"></xs:element>
      <xs:element ref="MediaController"></xs:element>
      <xs:element ref="TextView"></xs:element>
      <xs:element ref="FragmentBreadCrumbs"></xs:element>
      <xs:element ref="AppWidgetHostView"></xs:element>
      <xs:element ref="GestureOverlayView"></xs:element>
      <xs:element ref="ExtractEditText"></xs:element>
      <xs:element ref="KeyboardView"></xs:element>
      <xs:element ref="RSSurfaceView"></xs:element>
      <xs:element ref="RSTextureView"></xs:element>
      <xs:element ref="SurfaceView"></xs:element>
      <xs:element ref="TextureView"></xs:element>
      <xs:element ref="ViewGroup"></xs:element>
      <xs:element ref="ViewStub"></xs:element>
      <xs:element ref="WebView"></xs:element>
      <xs:element ref="AbsListView"></xs:element>
      <xs:element ref="AbsSeekBar"></xs:element>
      <xs:element ref="AbsSpinner"></xs:element>
      <xs:element ref="AbsoluteLayout"></xs:element>
      <xs:element ref="AdapterViewFlipper"></xs:element>
      <xs:element ref="AnalogClock"></xs:element>
      <xs:element ref="Button"></xs:element>
      <xs:element ref="CalendarView"></xs:element>
      <xs:element ref="CheckBox"></xs:element>
      <xs:element ref="CheckedTextView"></xs:element>
      <xs:element ref="Chronometer"></xs:element>
      <xs:element ref="CompoundButton"></xs:element>
      <xs:element ref="DatePicker"></xs:element>
      <xs:element ref="DialerFilter"></xs:element>
      <xs:element ref="DigitalClock"></xs:element>
      <xs:element ref="EditText"></xs:element>
      <xs:element ref="ExpandableListView"></xs:element>
      <xs:element ref="FrameLayout"></xs:element>
      <xs:element ref="Gallery"></xs:element>
      <xs:element ref="GridLayout"></xs:element>
      <xs:element ref="GridView"></xs:element>
      <xs:element ref="HorizontalScrollView"></xs:element>
      <xs:element ref="ImageButton"></xs:element>
      <xs:element ref="ImageSwitcher"></xs:element>
      <xs:element ref="ImageView"></xs:element>
      <xs:element ref="LinearLayout"></xs:element>
      <xs:element ref="ListView"></xs:element>
      <xs:element ref="MultiAutoCompleteTextView"></xs:element>
      <xs:element ref="NumberPicker"></xs:element>
      <xs:element ref="ProgressBar"></xs:element>
      <xs:element ref="QuickContactBadge"></xs:element>
      <xs:element ref="RadioButton"></xs:element>
      <xs:element ref="RadioGroup"></xs:element>
      <xs:element ref="RatingBar"></xs:element>
      <xs:element ref="RelativeLayout"></xs:element>
      <xs:element ref="ScrollView"></xs:element>
      <xs:element ref="SearchView"></xs:element>
      <xs:element ref="SeekBar"></xs:element>
      <xs:element ref="SlidingDrawer"></xs:element>
      <xs:element ref="Space"></xs:element>
      <xs:element ref="Spinner"></xs:element>
      <xs:element ref="StackView"></xs:element>
      <xs:element ref="Switch"></xs:element>
      <xs:element ref="TabHost"></xs:element>
      <xs:element ref="TabWidget"></xs:element>
      <xs:element ref="TableLayout"></xs:element>
      <xs:element ref="TableRow"></xs:element>
      <xs:element ref="TextSwitcher"></xs:element>
      <xs:element ref="TimePicker"></xs:element>
      <xs:element ref="ToggleButton"></xs:element>
      <xs:element ref="TwoLineListItem"></xs:element>
      <xs:element ref="VideoView"></xs:element>
      <xs:element ref="ViewAnimator"></xs:element>
      <xs:element ref="ViewFlipper"></xs:element>
      <xs:element ref="ViewSwitcher"></xs:element>
      <xs:element ref="ZoomButton"></xs:element>
      <xs:element ref="ZoomControls"></xs:element>
    </xs:choice>
  </xs:group>
  <xs:element name="View" type="View"></xs:element>
  <xs:complexType name="View">
    <xs:attribute ref="android:layout_x"></xs:attribute>
    <xs:attribute ref="android:layout_y"></xs:attribute>
    <xs:attribute ref="android:layout_gravity"></xs:attribute>
    <xs:attribute ref="android:layout_column"></xs:attribute>
    <xs:attribute ref="android:layout_columnSpan"></xs:attribute>
    <xs:attribute ref="android:layout_row"></xs:attribute>
    <xs:attribute ref="android:layout_rowSpan"></xs:attribute>
    <xs:attribute ref="android:icon"></xs:attribute>
    <xs:attribute ref="android:imeSubtypeExtraValue"></xs:attribute>
    <xs:attribute ref="android:imeSubtypeLocale"></xs:attribute>
    <xs:attribute ref="android:imeSubtypeMode"></xs:attribute>
    <xs:attribute ref="android:isAuxiliary"></xs:attribute>
    <xs:attribute ref="android:label"></xs:attribute>
    <xs:attribute ref="android:overridesImplicitlyEnabledSubtype"></xs:attribute>
    <xs:attribute ref="android:codes"></xs:attribute>
    <xs:attribute ref="android:iconPreview"></xs:attribute>
    <xs:attribute ref="android:isModifier"></xs:attribute>
    <xs:attribute ref="android:isRepeatable"></xs:attribute>
    <xs:attribute ref="android:isSticky"></xs:attribute>
    <xs:attribute ref="android:keyEdgeFlags"></xs:attribute>
    <xs:attribute ref="android:keyIcon"></xs:attribute>
    <xs:attribute ref="android:keyLabel"></xs:attribute>
    <xs:attribute ref="android:keyOutputText"></xs:attribute>
    <xs:attribute ref="android:keyboardMode"></xs:attribute>
    <xs:attribute ref="android:popupCharacters"></xs:attribute>
    <xs:attribute ref="android:popupKeyboard"></xs:attribute>
    <xs:attribute ref="android:rowEdgeFlags"></xs:attribute>
    <xs:attribute ref="android:layout_height"></xs:attribute>
    <xs:attribute ref="android:layout_weight"></xs:attribute>
    <xs:attribute ref="android:layout_width"></xs:attribute>
    <xs:attribute ref="android:layout_above"></xs:attribute>
    <xs:attribute ref="android:layout_alignBaseline"></xs:attribute>
    <xs:attribute ref="android:layout_alignBottom"></xs:attribute>
    <xs:attribute ref="android:layout_alignLeft"></xs:attribute>
    <xs:attribute ref="android:layout_alignParentBottom"></xs:attribute>
    <xs:attribute ref="android:layout_alignParentLeft"></xs:attribute>
    <xs:attribute ref="android:layout_alignParentRight"></xs:attribute>
    <xs:attribute ref="android:layout_alignParentTop"></xs:attribute>
    <xs:attribute ref="android:layout_alignRight"></xs:attribute>
    <xs:attribute ref="android:layout_alignTop"></xs:attribute>
    <xs:attribute ref="android:layout_alignWithParentIfMissing"></xs:attribute>
    <xs:attribute ref="android:layout_below"></xs:attribute>
    <xs:attribute ref="android:layout_centerHorizontal"></xs:attribute>
    <xs:attribute ref="android:layout_centerInParent"></xs:attribute>
    <xs:attribute ref="android:layout_centerVertical"></xs:attribute>
    <xs:attribute ref="android:layout_toLeftOf"></xs:attribute>
    <xs:attribute ref="android:layout_toRightOf"></xs:attribute>
    <xs:attribute ref="android:subtypeExtraValue"></xs:attribute>
    <xs:attribute ref="android:subtypeLocale"></xs:attribute>
    <xs:attribute ref="android:layout_span"></xs:attribute>
    <xs:attribute ref="android:layout_scale"></xs:attribute>
    <xs:attribute ref="android:alpha"></xs:attribute>
    <xs:attribute ref="android:background"></xs:attribute>
    <xs:attribute ref="android:clickable"></xs:attribute>
    <xs:attribute ref="android:contentDescription"></xs:attribute>
    <xs:attribute ref="android:drawingCacheQuality"></xs:attribute>
    <xs:attribute ref="android:duplicateParentState"></xs:attribute>
    <xs:attribute ref="android:fadeScrollbars"></xs:attribute>
    <xs:attribute ref="android:fadingEdge"></xs:attribute>
    <xs:attribute ref="android:fadingEdgeLength"></xs:attribute>
    <xs:attribute ref="android:filterTouchesWhenObscured"></xs:attribute>
    <xs:attribute ref="android:fitsSystemWindows"></xs:attribute>
    <xs:attribute ref="android:focusable"></xs:attribute>
    <xs:attribute ref="android:focusableInTouchMode"></xs:attribute>
    <xs:attribute ref="android:hapticFeedbackEnabled"></xs:attribute>
    <xs:attribute ref="android:id"></xs:attribute>
    <xs:attribute ref="android:isScrollContainer"></xs:attribute>
    <xs:attribute ref="android:keepScreenOn"></xs:attribute>
    <xs:attribute ref="android:layerType"></xs:attribute>
    <xs:attribute ref="android:longClickable"></xs:attribute>
    <xs:attribute ref="android:minHeight"></xs:attribute>
    <xs:attribute ref="android:minWidth"></xs:attribute>
    <xs:attribute ref="android:nextFocusDown"></xs:attribute>
    <xs:attribute ref="android:nextFocusForward"></xs:attribute>
    <xs:attribute ref="android:nextFocusLeft"></xs:attribute>
    <xs:attribute ref="android:nextFocusRight"></xs:attribute>
    <xs:attribute ref="android:nextFocusUp"></xs:attribute>
    <xs:attribute ref="android:onClick"></xs:attribute>
    <xs:attribute ref="android:overScrollMode"></xs:attribute>
    <xs:attribute ref="android:padding"></xs:attribute>
    <xs:attribute ref="android:paddingBottom"></xs:attribute>
    <xs:attribute ref="android:paddingLeft"></xs:attribute>
    <xs:attribute ref="android:paddingRight"></xs:attribute>
    <xs:attribute ref="android:paddingTop"></xs:attribute>
    <xs:attribute ref="android:requiresFadingEdge"></xs:attribute>
    <xs:attribute ref="android:rotation"></xs:attribute>
    <xs:attribute ref="android:rotationX"></xs:attribute>
    <xs:attribute ref="android:rotationY"></xs:attribute>
    <xs:attribute ref="android:saveEnabled"></xs:attribute>
    <xs:attribute ref="android:scaleX"></xs:attribute>
    <xs:attribute ref="android:scaleY"></xs:attribute>
    <xs:attribute ref="android:scrollX"></xs:attribute>
    <xs:attribute ref="android:scrollY"></xs:attribute>
    <xs:attribute ref="android:scrollbarAlwaysDrawHorizontalTrack"></xs:attribute>
    <xs:attribute ref="android:scrollbarAlwaysDrawVerticalTrack"></xs:attribute>
    <xs:attribute ref="android:scrollbarDefaultDelayBeforeFade"></xs:attribute>
    <xs:attribute ref="android:scrollbarFadeDuration"></xs:attribute>
    <xs:attribute ref="android:scrollbarSize"></xs:attribute>
    <xs:attribute ref="android:scrollbarStyle"></xs:attribute>
    <xs:attribute ref="android:scrollbarThumbHorizontal"></xs:attribute>
    <xs:attribute ref="android:scrollbarThumbVertical"></xs:attribute>
    <xs:attribute ref="android:scrollbarTrackHorizontal"></xs:attribute>
    <xs:attribute ref="android:scrollbarTrackVertical"></xs:attribute>
    <xs:attribute ref="android:scrollbars"></xs:attribute>
    <xs:attribute ref="android:soundEffectsEnabled"></xs:attribute>
    <xs:attribute ref="android:tag"></xs:attribute>
    <xs:attribute ref="android:transformPivotX"></xs:attribute>
    <xs:attribute ref="android:transformPivotY"></xs:attribute>
    <xs:attribute ref="android:translationX"></xs:attribute>
    <xs:attribute ref="android:translationY"></xs:attribute>
    <xs:attribute ref="android:verticalScrollbarPosition"></xs:attribute>
    <xs:attribute ref="android:visibility"></xs:attribute>
    <xs:attribute ref="android:layout_margin"></xs:attribute>
    <xs:attribute ref="android:layout_marginBottom"></xs:attribute>
    <xs:attribute ref="android:layout_marginLeft"></xs:attribute>
    <xs:attribute ref="android:layout_marginRight"></xs:attribute>
    <xs:attribute ref="android:layout_marginTop"></xs:attribute>
  </xs:complexType>
  <xs:element name="GLSurfaceView" type="GLSurfaceView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Opengl.GLSurfaceView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="GLSurfaceView">
    <xs:complexContent mixed="false">
      <xs:extension base="SurfaceView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AdapterView" type="AdapterView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AdapterView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AdapterView">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AdapterViewAnimator" type="AdapterViewAnimator">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AdapterViewAnimator</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AdapterViewAnimator">
    <xs:complexContent mixed="false">
      <xs:extension base="AdapterView">
        <xs:attribute ref="android:animateFirstView"></xs:attribute>
        <xs:attribute ref="android:inAnimation"></xs:attribute>
        <xs:attribute ref="android:loopViews"></xs:attribute>
        <xs:attribute ref="android:outAnimation"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AutoCompleteTextView" type="AutoCompleteTextView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AutoCompleteTextView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AutoCompleteTextView">
    <xs:complexContent mixed="false">
      <xs:extension base="EditText">
        <xs:attribute ref="android:completionHint"></xs:attribute>
        <xs:attribute ref="android:completionHintView"></xs:attribute>
        <xs:attribute ref="android:completionThreshold"></xs:attribute>
        <xs:attribute ref="android:dropDownAnchor"></xs:attribute>
        <xs:attribute ref="android:dropDownHeight"></xs:attribute>
        <xs:attribute ref="android:dropDownHorizontalOffset"></xs:attribute>
        <xs:attribute ref="android:dropDownSelector"></xs:attribute>
        <xs:attribute ref="android:dropDownVerticalOffset"></xs:attribute>
        <xs:attribute ref="android:dropDownWidth"></xs:attribute>
        <xs:attribute ref="android:inputType"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="MediaController" type="MediaController">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.MediaController</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="MediaController">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TextView" type="TextView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TextView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TextView">
    <xs:complexContent mixed="false">
      <xs:extension base="View">
        <xs:attribute ref="android:autoLink"></xs:attribute>
        <xs:attribute ref="android:autoText"></xs:attribute>
        <xs:attribute ref="android:bufferType"></xs:attribute>
        <xs:attribute ref="android:capitalize"></xs:attribute>
        <xs:attribute ref="android:cursorVisible"></xs:attribute>
        <xs:attribute ref="android:digits"></xs:attribute>
        <xs:attribute ref="android:drawableBottom"></xs:attribute>
        <xs:attribute ref="android:drawableEnd"></xs:attribute>
        <xs:attribute ref="android:drawableLeft"></xs:attribute>
        <xs:attribute ref="android:drawablePadding"></xs:attribute>
        <xs:attribute ref="android:drawableRight"></xs:attribute>
        <xs:attribute ref="android:drawableStart"></xs:attribute>
        <xs:attribute ref="android:drawableTop"></xs:attribute>
        <xs:attribute ref="android:editable"></xs:attribute>
        <xs:attribute ref="android:editorExtras"></xs:attribute>
        <xs:attribute ref="android:ellipsize"></xs:attribute>
        <xs:attribute ref="android:ems"></xs:attribute>
        <xs:attribute ref="android:enabled"></xs:attribute>
        <xs:attribute ref="android:freezesText"></xs:attribute>
        <xs:attribute ref="android:gravity"></xs:attribute>
        <xs:attribute ref="android:height"></xs:attribute>
        <xs:attribute ref="android:hint"></xs:attribute>
        <xs:attribute ref="android:imeActionId"></xs:attribute>
        <xs:attribute ref="android:imeActionLabel"></xs:attribute>
        <xs:attribute ref="android:imeOptions"></xs:attribute>
        <xs:attribute ref="android:includeFontPadding"></xs:attribute>
        <xs:attribute ref="android:inputMethod"></xs:attribute>
        <xs:attribute ref="android:inputType"></xs:attribute>
        <xs:attribute ref="android:lineSpacingExtra"></xs:attribute>
        <xs:attribute ref="android:lineSpacingMultiplier"></xs:attribute>
        <xs:attribute ref="android:lines"></xs:attribute>
        <xs:attribute ref="android:linksClickable"></xs:attribute>
        <xs:attribute ref="android:marqueeRepeatLimit"></xs:attribute>
        <xs:attribute ref="android:maxEms"></xs:attribute>
        <xs:attribute ref="android:maxHeight"></xs:attribute>
        <xs:attribute ref="android:maxLength"></xs:attribute>
        <xs:attribute ref="android:maxLines"></xs:attribute>
        <xs:attribute ref="android:maxWidth"></xs:attribute>
        <xs:attribute ref="android:minEms"></xs:attribute>
        <xs:attribute ref="android:minHeight"></xs:attribute>
        <xs:attribute ref="android:minLines"></xs:attribute>
        <xs:attribute ref="android:minWidth"></xs:attribute>
        <xs:attribute ref="android:numeric"></xs:attribute>
        <xs:attribute ref="android:password"></xs:attribute>
        <xs:attribute ref="android:phoneNumber"></xs:attribute>
        <xs:attribute ref="android:privateImeOptions"></xs:attribute>
        <xs:attribute ref="android:scrollHorizontally"></xs:attribute>
        <xs:attribute ref="android:selectAllOnFocus"></xs:attribute>
        <xs:attribute ref="android:shadowColor"></xs:attribute>
        <xs:attribute ref="android:shadowDx"></xs:attribute>
        <xs:attribute ref="android:shadowDy"></xs:attribute>
        <xs:attribute ref="android:shadowRadius"></xs:attribute>
        <xs:attribute ref="android:singleLine"></xs:attribute>
        <xs:attribute ref="android:text"></xs:attribute>
        <xs:attribute ref="android:textAllCaps"></xs:attribute>
        <xs:attribute ref="android:textAppearance"></xs:attribute>
        <xs:attribute ref="android:textColor"></xs:attribute>
        <xs:attribute ref="android:textColorHighlight"></xs:attribute>
        <xs:attribute ref="android:textColorHint"></xs:attribute>
        <xs:attribute ref="android:textColorLink"></xs:attribute>
        <xs:attribute ref="android:textCursorDrawable"></xs:attribute>
        <xs:attribute ref="android:textEditNoPasteWindowLayout"></xs:attribute>
        <xs:attribute ref="android:textEditPasteWindowLayout"></xs:attribute>
        <xs:attribute ref="android:textEditSideNoPasteWindowLayout"></xs:attribute>
        <xs:attribute ref="android:textEditSidePasteWindowLayout"></xs:attribute>
        <xs:attribute ref="android:textEditSuggestionItemLayout"></xs:attribute>
        <xs:attribute ref="android:textIsSelectable"></xs:attribute>
        <xs:attribute ref="android:textScaleX"></xs:attribute>
        <xs:attribute ref="android:textSelectHandle"></xs:attribute>
        <xs:attribute ref="android:textSelectHandleLeft"></xs:attribute>
        <xs:attribute ref="android:textSelectHandleRight"></xs:attribute>
        <xs:attribute ref="android:textSize"></xs:attribute>
        <xs:attribute ref="android:textStyle"></xs:attribute>
        <xs:attribute ref="android:typeface"></xs:attribute>
        <xs:attribute ref="android:width"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="FragmentBreadCrumbs" type="FragmentBreadCrumbs">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.App.FragmentBreadCrumbs</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="FragmentBreadCrumbs">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AppWidgetHostView" type="AppWidgetHostView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Appwidget.AppWidgetHostView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AppWidgetHostView">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="GestureOverlayView" type="GestureOverlayView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Gestures.GestureOverlayView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="GestureOverlayView">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout">
        <xs:attribute ref="android:eventsInterceptionEnabled"></xs:attribute>
        <xs:attribute ref="android:fadeDuration"></xs:attribute>
        <xs:attribute ref="android:fadeEnabled"></xs:attribute>
        <xs:attribute ref="android:fadeOffset"></xs:attribute>
        <xs:attribute ref="android:gestureColor"></xs:attribute>
        <xs:attribute ref="android:gestureStrokeAngleThreshold"></xs:attribute>
        <xs:attribute ref="android:gestureStrokeLengthThreshold"></xs:attribute>
        <xs:attribute ref="android:gestureStrokeSquarenessThreshold"></xs:attribute>
        <xs:attribute ref="android:gestureStrokeType"></xs:attribute>
        <xs:attribute ref="android:gestureStrokeWidth"></xs:attribute>
        <xs:attribute ref="android:orientation"></xs:attribute>
        <xs:attribute ref="android:uncertainGestureColor"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ExtractEditText" type="ExtractEditText">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.InputMethodServices.ExtractEditText</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ExtractEditText">
    <xs:complexContent mixed="false">
      <xs:extension base="EditText"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="KeyboardView" type="KeyboardView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.InputMethodServices.KeyboardView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="KeyboardView">
    <xs:complexContent mixed="false">
      <xs:extension base="View">
        <xs:attribute ref="android:keyBackground"></xs:attribute>
        <xs:attribute ref="android:keyPreviewHeight"></xs:attribute>
        <xs:attribute ref="android:keyPreviewLayout"></xs:attribute>
        <xs:attribute ref="android:keyPreviewOffset"></xs:attribute>
        <xs:attribute ref="android:keyTextColor"></xs:attribute>
        <xs:attribute ref="android:keyTextSize"></xs:attribute>
        <xs:attribute ref="android:labelTextSize"></xs:attribute>
        <xs:attribute ref="android:popupLayout"></xs:attribute>
        <xs:attribute ref="android:shadowColor"></xs:attribute>
        <xs:attribute ref="android:shadowRadius"></xs:attribute>
        <xs:attribute ref="android:verticalCorrection"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="RSSurfaceView" type="RSSurfaceView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Renderscripts.RSSurfaceView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="RSSurfaceView">
    <xs:complexContent mixed="false">
      <xs:extension base="SurfaceView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="RSTextureView" type="RSTextureView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Renderscripts.RSTextureView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="RSTextureView">
    <xs:complexContent mixed="false">
      <xs:extension base="TextureView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="SurfaceView" type="SurfaceView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Views.SurfaceView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="SurfaceView">
    <xs:complexContent mixed="false">
      <xs:extension base="View"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TextureView" type="TextureView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Views.TextureView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TextureView">
    <xs:complexContent mixed="false">
      <xs:extension base="View"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ViewGroup" type="ViewGroup">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Views.ViewGroup</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ViewGroup">
    <xs:complexContent mixed="false">
      <xs:extension base="View">
        <xs:group minOccurs="0" maxOccurs="unbounded" ref="any-view"></xs:group>
        <xs:attribute ref="android:addStatesFromChildren"></xs:attribute>
        <xs:attribute ref="android:alwaysDrawnWithCache"></xs:attribute>
        <xs:attribute ref="android:animateLayoutChanges"></xs:attribute>
        <xs:attribute ref="android:animationCache"></xs:attribute>
        <xs:attribute ref="android:clipChildren"></xs:attribute>
        <xs:attribute ref="android:clipToPadding"></xs:attribute>
        <xs:attribute ref="android:descendantFocusability"></xs:attribute>
        <xs:attribute ref="android:layoutAnimation"></xs:attribute>
        <xs:attribute ref="android:persistentDrawingCache"></xs:attribute>
        <xs:attribute ref="android:splitMotionEvents"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ViewStub" type="ViewStub">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Views.ViewStub</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ViewStub">
    <xs:complexContent mixed="false">
      <xs:extension base="View">
        <xs:attribute ref="android:inflatedId"></xs:attribute>
        <xs:attribute ref="android:layout"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="WebView" type="WebView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Webkit.WebView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="WebView">
    <xs:complexContent mixed="false">
      <xs:extension base="AbsoluteLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AbsListView" type="AbsListView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AbsListView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AbsListView">
    <xs:complexContent mixed="false">
      <xs:extension base="AdapterView">
        <xs:attribute ref="android:cacheColorHint"></xs:attribute>
        <xs:attribute ref="android:choiceMode"></xs:attribute>
        <xs:attribute ref="android:drawSelectorOnTop"></xs:attribute>
        <xs:attribute ref="android:fastScrollAlwaysVisible"></xs:attribute>
        <xs:attribute ref="android:fastScrollEnabled"></xs:attribute>
        <xs:attribute ref="android:listSelector"></xs:attribute>
        <xs:attribute ref="android:scrollingCache"></xs:attribute>
        <xs:attribute ref="android:smoothScrollbar"></xs:attribute>
        <xs:attribute ref="android:stackFromBottom"></xs:attribute>
        <xs:attribute ref="android:textFilterEnabled"></xs:attribute>
        <xs:attribute ref="android:transcriptMode"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AbsSeekBar" type="AbsSeekBar">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AbsSeekBar</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AbsSeekBar">
    <xs:complexContent mixed="false">
      <xs:extension base="ProgressBar"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AbsSpinner" type="AbsSpinner">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AbsSpinner</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AbsSpinner">
    <xs:complexContent mixed="false">
      <xs:extension base="AdapterView">
        <xs:attribute ref="android:entries"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AbsoluteLayout" type="AbsoluteLayout">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AbsoluteLayout</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AbsoluteLayout">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AdapterViewFlipper" type="AdapterViewFlipper">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AdapterViewFlipper</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AdapterViewFlipper">
    <xs:complexContent mixed="false">
      <xs:extension base="AdapterViewAnimator">
        <xs:attribute ref="android:autoStart"></xs:attribute>
        <xs:attribute ref="android:flipInterval"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="AnalogClock" type="AnalogClock">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.AnalogClock</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="AnalogClock">
    <xs:complexContent mixed="false">
      <xs:extension base="View">
        <xs:attribute ref="android:dial"></xs:attribute>
        <xs:attribute ref="android:hand_hour"></xs:attribute>
        <xs:attribute ref="android:hand_minute"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Button" type="Button">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.Button</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="Button">
    <xs:complexContent mixed="false">
      <xs:extension base="TextView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="CalendarView" type="CalendarView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.CalendarView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="CalendarView">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout">
        <xs:attribute ref="android:dateTextAppearance"></xs:attribute>
        <xs:attribute ref="android:firstDayOfWeek"></xs:attribute>
        <xs:attribute ref="android:focusedMonthDateColor"></xs:attribute>
        <xs:attribute ref="android:maxDate"></xs:attribute>
        <xs:attribute ref="android:minDate"></xs:attribute>
        <xs:attribute ref="android:selectedDateVerticalBar"></xs:attribute>
        <xs:attribute ref="android:selectedWeekBackgroundColor"></xs:attribute>
        <xs:attribute ref="android:showWeekNumber"></xs:attribute>
        <xs:attribute ref="android:shownWeekCount"></xs:attribute>
        <xs:attribute ref="android:unfocusedMonthDateColor"></xs:attribute>
        <xs:attribute ref="android:weekDayTextAppearance"></xs:attribute>
        <xs:attribute ref="android:weekNumberColor"></xs:attribute>
        <xs:attribute ref="android:weekSeparatorLineColor"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="CheckBox" type="CheckBox">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.CheckBox</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="CheckBox">
    <xs:complexContent mixed="false">
      <xs:extension base="CompoundButton"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="CheckedTextView" type="CheckedTextView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.CheckedTextView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="CheckedTextView">
    <xs:complexContent mixed="false">
      <xs:extension base="TextView">
        <xs:attribute ref="android:checkMark"></xs:attribute>
        <xs:attribute ref="android:checked"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Chronometer" type="Chronometer">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.Chronometer</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="Chronometer">
    <xs:complexContent mixed="false">
      <xs:extension base="TextView">
        <xs:attribute ref="android:format"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="CompoundButton" type="CompoundButton">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.CompoundButton</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="CompoundButton">
    <xs:complexContent mixed="false">
      <xs:extension base="Button">
        <xs:attribute ref="android:button"></xs:attribute>
        <xs:attribute ref="android:checked"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="DatePicker" type="DatePicker">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.DatePicker</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="DatePicker">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="DialerFilter" type="DialerFilter">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.DialerFilter</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="DialerFilter">
    <xs:complexContent mixed="false">
      <xs:extension base="RelativeLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="DigitalClock" type="DigitalClock">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.DigitalClock</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="DigitalClock">
    <xs:complexContent mixed="false">
      <xs:extension base="TextView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="EditText" type="EditText">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.EditText</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="EditText">
    <xs:complexContent mixed="false">
      <xs:extension base="TextView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ExpandableListView" type="ExpandableListView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ExpandableListView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ExpandableListView">
    <xs:complexContent mixed="false">
      <xs:extension base="ListView">
        <xs:attribute ref="android:childDivider"></xs:attribute>
        <xs:attribute ref="android:childIndicator"></xs:attribute>
        <xs:attribute ref="android:childIndicatorLeft"></xs:attribute>
        <xs:attribute ref="android:childIndicatorRight"></xs:attribute>
        <xs:attribute ref="android:groupIndicator"></xs:attribute>
        <xs:attribute ref="android:indicatorLeft"></xs:attribute>
        <xs:attribute ref="android:indicatorRight"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="FrameLayout" type="FrameLayout">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.FrameLayout</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="FrameLayout">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup">
        <xs:attribute ref="android:foreground"></xs:attribute>
        <xs:attribute ref="android:foregroundGravity"></xs:attribute>
        <xs:attribute ref="android:measureAllChildren"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Gallery" type="Gallery">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.Gallery</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="Gallery">
    <xs:complexContent mixed="false">
      <xs:extension base="AbsSpinner">
        <xs:attribute ref="android:animationDuration"></xs:attribute>
        <xs:attribute ref="android:gravity"></xs:attribute>
        <xs:attribute ref="android:spacing"></xs:attribute>
        <xs:attribute ref="android:unselectedAlpha"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="GridLayout" type="GridLayout">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.GridLayout</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="GridLayout">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup">
        <xs:attribute ref="android:alignmentMode"></xs:attribute>
        <xs:attribute ref="android:columnCount"></xs:attribute>
        <xs:attribute ref="android:columnOrderPreserved"></xs:attribute>
        <xs:attribute ref="android:orientation"></xs:attribute>
        <xs:attribute ref="android:rowCount"></xs:attribute>
        <xs:attribute ref="android:rowOrderPreserved"></xs:attribute>
        <xs:attribute ref="android:useDefaultMargins"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="GridView" type="GridView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.GridView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="GridView">
    <xs:complexContent mixed="false">
      <xs:extension base="AbsListView">
        <xs:attribute ref="android:columnWidth"></xs:attribute>
        <xs:attribute ref="android:gravity"></xs:attribute>
        <xs:attribute ref="android:horizontalSpacing"></xs:attribute>
        <xs:attribute ref="android:numColumns"></xs:attribute>
        <xs:attribute ref="android:stretchMode"></xs:attribute>
        <xs:attribute ref="android:verticalSpacing"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="HorizontalScrollView" type="HorizontalScrollView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.HorizontalScrollView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="HorizontalScrollView">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout">
        <xs:attribute ref="android:fillViewport"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ImageButton" type="ImageButton">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ImageButton</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ImageButton">
    <xs:complexContent mixed="false">
      <xs:extension base="ImageView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ImageSwitcher" type="ImageSwitcher">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ImageSwitcher</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ImageSwitcher">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewSwitcher"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ImageView" type="ImageView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ImageView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ImageView">
    <xs:complexContent mixed="false">
      <xs:extension base="View">
        <xs:attribute ref="android:adjustViewBounds"></xs:attribute>
        <xs:attribute ref="android:baseline"></xs:attribute>
        <xs:attribute ref="android:baselineAlignBottom"></xs:attribute>
        <xs:attribute ref="android:cropToPadding"></xs:attribute>
        <xs:attribute ref="android:maxHeight"></xs:attribute>
        <xs:attribute ref="android:maxWidth"></xs:attribute>
        <xs:attribute ref="android:scaleType"></xs:attribute>
        <xs:attribute ref="android:src"></xs:attribute>
        <xs:attribute ref="android:tint"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="LinearLayout" type="LinearLayout">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.LinearLayout</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="LinearLayout">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup">
        <xs:attribute ref="android:baselineAligned"></xs:attribute>
        <xs:attribute ref="android:baselineAlignedChildIndex"></xs:attribute>
        <xs:attribute ref="android:divider"></xs:attribute>
        <xs:attribute ref="android:dividerPadding"></xs:attribute>
        <xs:attribute ref="android:gravity"></xs:attribute>
        <xs:attribute ref="android:measureWithLargestChild"></xs:attribute>
        <xs:attribute ref="android:orientation"></xs:attribute>
        <xs:attribute ref="android:showDividers"></xs:attribute>
        <xs:attribute ref="android:weightSum"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ListView" type="ListView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ListView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ListView">
    <xs:complexContent mixed="false">
      <xs:extension base="AbsListView">
        <xs:attribute ref="android:divider"></xs:attribute>
        <xs:attribute ref="android:dividerHeight"></xs:attribute>
        <xs:attribute ref="android:entries"></xs:attribute>
        <xs:attribute ref="android:footerDividersEnabled"></xs:attribute>
        <xs:attribute ref="android:headerDividersEnabled"></xs:attribute>
        <xs:attribute ref="android:overScrollFooter"></xs:attribute>
        <xs:attribute ref="android:overScrollHeader"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="MultiAutoCompleteTextView" type="MultiAutoCompleteTextView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.MultiAutoCompleteTextView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="MultiAutoCompleteTextView">
    <xs:complexContent mixed="false">
      <xs:extension base="AutoCompleteTextView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="NumberPicker" type="NumberPicker">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.NumberPicker</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="NumberPicker">
    <xs:complexContent mixed="false">
      <xs:extension base="LinearLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ProgressBar" type="ProgressBar">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ProgressBar</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ProgressBar">
    <xs:complexContent mixed="false">
      <xs:extension base="View">
        <xs:attribute ref="android:animationResolution"></xs:attribute>
        <xs:attribute ref="android:indeterminate"></xs:attribute>
        <xs:attribute ref="android:indeterminateBehavior"></xs:attribute>
        <xs:attribute ref="android:indeterminateDrawable"></xs:attribute>
        <xs:attribute ref="android:indeterminateDuration"></xs:attribute>
        <xs:attribute ref="android:indeterminateOnly"></xs:attribute>
        <xs:attribute ref="android:interpolator"></xs:attribute>
        <xs:attribute ref="android:max"></xs:attribute>
        <xs:attribute ref="android:maxHeight"></xs:attribute>
        <xs:attribute ref="android:maxWidth"></xs:attribute>
        <xs:attribute ref="android:minHeight"></xs:attribute>
        <xs:attribute ref="android:minWidth"></xs:attribute>
        <xs:attribute ref="android:progress"></xs:attribute>
        <xs:attribute ref="android:progressDrawable"></xs:attribute>
        <xs:attribute ref="android:secondaryProgress"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="QuickContactBadge" type="QuickContactBadge">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.QuickContactBadge</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="QuickContactBadge">
    <xs:complexContent mixed="false">
      <xs:extension base="ImageView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="RadioButton" type="RadioButton">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.RadioButton</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="RadioButton">
    <xs:complexContent mixed="false">
      <xs:extension base="CompoundButton"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="RadioGroup" type="RadioGroup">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.RadioGroup</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="RadioGroup">
    <xs:complexContent mixed="false">
      <xs:extension base="LinearLayout">
        <xs:attribute ref="android:checkedButton"></xs:attribute>
        <xs:attribute ref="android:orientation"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="RatingBar" type="RatingBar">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.RatingBar</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="RatingBar">
    <xs:complexContent mixed="false">
      <xs:extension base="AbsSeekBar">
        <xs:attribute ref="android:isIndicator"></xs:attribute>
        <xs:attribute ref="android:numStars"></xs:attribute>
        <xs:attribute ref="android:rating"></xs:attribute>
        <xs:attribute ref="android:stepSize"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="RelativeLayout" type="RelativeLayout">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.RelativeLayout</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="RelativeLayout">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup">
        <xs:attribute ref="android:gravity"></xs:attribute>
        <xs:attribute ref="android:ignoreGravity"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ScrollView" type="ScrollView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ScrollView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ScrollView">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout">
        <xs:attribute ref="android:fillViewport"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="SearchView" type="SearchView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.SearchView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="SearchView">
    <xs:complexContent mixed="false">
      <xs:extension base="LinearLayout">
        <xs:attribute ref="android:iconifiedByDefault"></xs:attribute>
        <xs:attribute ref="android:imeOptions"></xs:attribute>
        <xs:attribute ref="android:inputType"></xs:attribute>
        <xs:attribute ref="android:maxWidth"></xs:attribute>
        <xs:attribute ref="android:queryHint"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="SeekBar" type="SeekBar">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.SeekBar</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="SeekBar">
    <xs:complexContent mixed="false">
      <xs:extension base="AbsSeekBar">
        <xs:attribute ref="android:thumb"></xs:attribute>
        <xs:attribute ref="android:thumbOffset"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="SlidingDrawer" type="SlidingDrawer">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.SlidingDrawer</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="SlidingDrawer">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewGroup">
        <xs:attribute ref="android:allowSingleTap"></xs:attribute>
        <xs:attribute ref="android:animateOnClick"></xs:attribute>
        <xs:attribute ref="android:bottomOffset"></xs:attribute>
        <xs:attribute ref="android:content"></xs:attribute>
        <xs:attribute ref="android:handle"></xs:attribute>
        <xs:attribute ref="android:orientation"></xs:attribute>
        <xs:attribute ref="android:topOffset"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Space" type="Space">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.Space</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="Space">
    <xs:complexContent mixed="false">
      <xs:extension base="View"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Spinner" type="Spinner">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.Spinner</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="Spinner">
    <xs:complexContent mixed="false">
      <xs:extension base="AbsSpinner">
        <xs:attribute ref="android:dropDownHorizontalOffset"></xs:attribute>
        <xs:attribute ref="android:dropDownSelector"></xs:attribute>
        <xs:attribute ref="android:dropDownVerticalOffset"></xs:attribute>
        <xs:attribute ref="android:dropDownWidth"></xs:attribute>
        <xs:attribute ref="android:gravity"></xs:attribute>
        <xs:attribute ref="android:popupBackground"></xs:attribute>
        <xs:attribute ref="android:prompt"></xs:attribute>
        <xs:attribute ref="android:spinnerMode"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="StackView" type="StackView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.StackView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="StackView">
    <xs:complexContent mixed="false">
      <xs:extension base="AdapterViewAnimator"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="Switch" type="Switch">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.Switch</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="Switch">
    <xs:complexContent mixed="false">
      <xs:extension base="CompoundButton">
        <xs:attribute ref="android:switchMinWidth"></xs:attribute>
        <xs:attribute ref="android:switchPadding"></xs:attribute>
        <xs:attribute ref="android:switchTextAppearance"></xs:attribute>
        <xs:attribute ref="android:textOff"></xs:attribute>
        <xs:attribute ref="android:textOn"></xs:attribute>
        <xs:attribute ref="android:thumb"></xs:attribute>
        <xs:attribute ref="android:thumbTextPadding"></xs:attribute>
        <xs:attribute ref="android:track"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TabHost" type="TabHost">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TabHost</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TabHost">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TabWidget" type="TabWidget">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TabWidget</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TabWidget">
    <xs:complexContent mixed="false">
      <xs:extension base="LinearLayout">
        <xs:attribute ref="android:divider"></xs:attribute>
        <xs:attribute ref="android:tabStripEnabled"></xs:attribute>
        <xs:attribute ref="android:tabStripLeft"></xs:attribute>
        <xs:attribute ref="android:tabStripRight"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TableLayout" type="TableLayout">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TableLayout</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TableLayout">
    <xs:complexContent mixed="false">
      <xs:extension base="LinearLayout">
        <xs:attribute ref="android:collapseColumns"></xs:attribute>
        <xs:attribute ref="android:shrinkColumns"></xs:attribute>
        <xs:attribute ref="android:stretchColumns"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TableRow" type="TableRow">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TableRow</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TableRow">
    <xs:complexContent mixed="false">
      <xs:extension base="LinearLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TextSwitcher" type="TextSwitcher">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TextSwitcher</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TextSwitcher">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewSwitcher"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TimePicker" type="TimePicker">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TimePicker</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TimePicker">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ToggleButton" type="ToggleButton">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ToggleButton</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ToggleButton">
    <xs:complexContent mixed="false">
      <xs:extension base="CompoundButton">
        <xs:attribute ref="android:disabledAlpha"></xs:attribute>
        <xs:attribute ref="android:textOff"></xs:attribute>
        <xs:attribute ref="android:textOn"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="TwoLineListItem" type="TwoLineListItem">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.TwoLineListItem</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="TwoLineListItem">
    <xs:complexContent mixed="false">
      <xs:extension base="RelativeLayout">
        <xs:attribute ref="android:mode"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="VideoView" type="VideoView">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.VideoView</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="VideoView">
    <xs:complexContent mixed="false">
      <xs:extension base="SurfaceView"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ViewAnimator" type="ViewAnimator">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ViewAnimator</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ViewAnimator">
    <xs:complexContent mixed="false">
      <xs:extension base="FrameLayout">
        <xs:attribute ref="android:animateFirstView"></xs:attribute>
        <xs:attribute ref="android:inAnimation"></xs:attribute>
        <xs:attribute ref="android:outAnimation"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ViewFlipper" type="ViewFlipper">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ViewFlipper</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ViewFlipper">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewAnimator">
        <xs:attribute ref="android:autoStart"></xs:attribute>
        <xs:attribute ref="android:flipInterval"></xs:attribute>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ViewSwitcher" type="ViewSwitcher">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ViewSwitcher</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ViewSwitcher">
    <xs:complexContent mixed="false">
      <xs:extension base="ViewAnimator"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ZoomButton" type="ZoomButton">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ZoomButton</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ZoomButton">
    <xs:complexContent mixed="false">
      <xs:extension base="ImageButton"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
  <xs:element name="ZoomControls" type="ZoomControls">
    <xs:annotation>
      <xs:documentation>Runtime Type: Android.Widget.ZoomControls</xs:documentation>
    </xs:annotation>
  </xs:element>
  <xs:complexType name="ZoomControls">
    <xs:complexContent mixed="false">
      <xs:extension base="LinearLayout"></xs:extension>
    </xs:complexContent>
  </xs:complexType>
</xs:schema>`;
var b = document.createElement('div');
b.innerHTML = a;
parse(b);

var p,result,proto,q;
for (p in map) {
    proto = map[p].prototype;
    map[p]={attributes:(result={})}
    for (q in proto) {
        result[q]={};
    }
}

